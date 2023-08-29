import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
  CardDescription,
} from "./ui/card";
interface ProductProps {
  id: string;
  title: string;
  image: string;
  priceLine: string;
  link: string;
  date?: Date;
}

export default function Product({
  id,
  title,
  image,
  priceLine,
  link,
  date,
}: ProductProps) {
  return (
    <Card className="max-w-16">
      <CardHeader>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription>
          <img src={image} alt={title} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{priceLine}</p>
        {date && <p>{date.toLocaleDateString()}</p>}
      </CardContent>
      <CardFooter>
        <AffiliateButton link={link} />
      </CardFooter>
    </Card>
  );
}

function AffiliateButton({ link }: { link: string }) {
  return (
    <Button asChild>
      <a href={link} target="_blank" rel="noreferrer">
        Buy{" "}
      </a>
    </Button>
  );
}
