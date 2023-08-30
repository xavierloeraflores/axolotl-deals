import Image from "next/image";
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
    <Card className="h-128  w-96 bg-secondary">
      <Image src={image} alt={title} width={500} height={500} />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {date && <CardDescription>{date.toLocaleDateString()}</CardDescription>}
      </CardHeader>
      <CardContent>
        <span className="text-lg">{priceLine}</span>
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
