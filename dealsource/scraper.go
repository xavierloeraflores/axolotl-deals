package main

import (
	"time"

	"github.com/gocolly/colly"
)

type DealSourcedItem struct {
	Title string `json:"title"`
	Image string `json:"image"`
	Link  string `json:"link"`

}



func getItems() []DealSourcedItem {
	var items []DealSourcedItem
	c := colly.NewCollector(
		colly.AllowedDomains("www.dealsource.tech"),
		colly.Async(true),
	)

	c.OnHTML(".summary-item", func(e *colly.HTMLElement) {
		title := e.ChildText(".summary-title-link")
		image := e.ChildAttr(".summary-thumbnail-image", "data-src")
		link :=  e.Request.AbsoluteURL(e.ChildAttr(".summary-title-link", "href"))

		i := DealSourcedItem{
			Title: title,
			Image: image,
			Link: link,
		}
		items = append(items, i)
	})

	c.Visit("https://www.dealsource.tech/")
	c.Wait()
	return items
}

func getAmazonLinkByTinyURL(tinyURL string)string{
	var amazonLink string
	println("tinyURL", tinyURL)
	c := colly.NewCollector(
		colly.AllowedDomains("tinyurl.com", "www.amazon.com", "amazon.com", "*", "www.tinyurl.com"),
		colly.Async(false),
		colly.MaxDepth(10),
	)
	// c.Limit(&colly.LimitRule{
	// 	DomainGlob:  "*",
	// 	Parallelism: 2,
	// 	RandomDelay: 	 3*time.Second,
	// })
	c.SetRequestTimeout(5*time.Second)

	c.OnRequest(func(r *colly.Request) {
		println("Requested Visiting", r.URL.String())
	})

	c.OnResponse(func(r *colly.Response) {
		println("Response Visited", r)
	})

	c.OnHTML("a[href]" , func(e *colly.HTMLElement) {
		// amazonLink = e.ChildAttr("#redirect-url", "value")
		println("HTML----",e)
	})

	c.OnXML("a[href]" , func(x *colly.XMLElement)  {
		// amazonLink = e.ChildAttr("#redirect-url", "value")
		println("XML----",x)
	})
	c.OnError(func(r *colly.Response, err error) {
		println("Error:", r.StatusCode, err)
	})
	c.Visit(tinyURL)
	// c.Request("GET", tinyURL, nil, nil, nil)
	c.Wait()
	println("xxx", amazonLink)
	return amazonLink
}


func main() {
	var dealSourcedItems []DealSourcedItem
	dealSourcedItems = getItems()

	for i := 0;  i< 1; i++ {
		println(i, dealSourcedItems[i].Title)
		getAmazonLinkByTinyURL(dealSourcedItems[i].Link)
	}



}

