import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "./ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      <header></header>
      {children}
      <footer></footer>
    </ThemeProvider>
  );
}
