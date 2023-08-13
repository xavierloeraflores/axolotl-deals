package main

import (
	"github.com/gocolly/colly"
)

type dealSourcedItem struct {
	Title string `json:"title"`
	Image string `json:"image"`
	Link  string `json:"link"`

}



func getItems() []dealSourcedItem {
	var items []dealSourcedItem
	c := colly.NewCollector(
		colly.AllowedDomains("www.dealsource.tech"),
		colly.Async(true),
	)

	c.OnHTML(".summary-item", func(e *colly.HTMLElement) {
		title := e.ChildText(".summary-title-link")
		image := e.ChildAttr(".summary-thumbnail-image", "data-src")
		link :=  e.Request.AbsoluteURL(e.ChildAttr(".summary-title-link", "href"))

		i := dealSourcedItem{
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



func main() {
	var dealSourcedItems []dealSourcedItem
	dealSourcedItems = getItems()

	for i := 0;  i< len(dealSourcedItems); i++ {
		println(i, dealSourcedItems[i].Title)
	}



}

