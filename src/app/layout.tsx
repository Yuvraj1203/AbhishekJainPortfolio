import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/ui/layout/Header";
import { NextUIProvider } from "@nextui-org/system";
import Footer from "@/ui/layout/Footer";
import FloatingContact from "@/ui/common/FloatingContact";
import StickyFooter from "@/ui/layout/StickyFooter";
import HeadlineStrip from "@/ui/common/HeadlineStrip";
import FooterStripe from "@/ui/common/FooterStripe";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crafting Digital Experiences",
  description: "Turning code into digital gold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <NextUIProvider className="flex flex-col items-center justify-between">
          <HeadlineStrip />
          <Header />
          {children}
          {/* <div className="text-2xl text-blue-950 font-semibold">in Progress...</div> */}
          {/* <Footer /> */}
          <FloatingContact />
          <StickyFooter />
          <FooterStripe />
        </NextUIProvider>
      </body>
    </html>
  );
}
