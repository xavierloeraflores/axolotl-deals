import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center border-b-2 border-accent bg-secondary p-4 text-secondary-foreground">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-64 flex-col p-2">
                <Destination
                  props={{
                    link: "/featured",
                    title: "Featured Products",
                    text: "Our most popular products",
                  }}
                />
                <Destination
                  props={{
                    link: "/products",
                    title: "All Products",
                    text: "All products we offer",
                  }}
                />
                <Destination
                  props={{
                    link: "/legacy",
                    title: "Legacy Products",
                    text: "Previously featured products",
                  }}
                />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-64 flex-col p-2">
                <Destination
                  props={{
                    link: "/about",
                    title: "About",
                    text: "Learn more about the website",
                  }}
                />
                <Destination
                  props={{
                    link: "/xavier",
                    title: "The Developer",
                    text: "Learn more about the developer",
                  }}
                />
                <Destination
                  props={{
                    link: "/tech",
                    title: "Tech Stack",
                    text: "Learn how the site was built",
                  }}
                />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

const Destination = ({
  props,
}: {
  props: { link: string; title: string; text?: string };
}) => {
  const { link, title, text } = props;
  return (
    <Link href={link} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <div className="flex w-full flex-col rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <span className="text-sm font-medium leading-none">{title}</span>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {text}
          </p>
        </div>
      </NavigationMenuLink>
    </Link>
  );
};
export default Header;
