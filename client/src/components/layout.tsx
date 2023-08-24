import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "./ui/toaster";
import Footer from "./footer";
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
