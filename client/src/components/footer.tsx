import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-secondary p-4 text-secondary-foreground">
      <Link href="/">
        <span className="m-4 font-bold underline">Axolotl Deals</span>
      </Link>
      <MyHoverCard>
        <span className="m-4 text-center">
          Created by <b className="underline">@Xavier Loera Flores</b>
        </span>
      </MyHoverCard>
      <span className="text-center">
        Made with ❤️ using Go, Next.js, TRPC, Prisma, & TailwindCSS
      </span>
    </footer>
  );
};

const MyHoverCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <HoverCard openDelay={5} closeDelay={20}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="h-32 bg-card text-center text-card-foreground">
        <h3>Xavier Loera Flores</h3>
        <div className="flex-col items-center justify-center text-muted-foreground underline">
          <a
            href="https://loeraflores.tech"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Personal Site
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/xavierloeraflores/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/xavierloeraflores"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            GitHub
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Footer;
