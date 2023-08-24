import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "./ui/toaster";
import Footer from "./footer";

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
      <Footer />
    </ThemeProvider>
  );
}
