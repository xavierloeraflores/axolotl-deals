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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
