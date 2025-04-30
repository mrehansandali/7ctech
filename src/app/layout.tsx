import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScroll from "@/components/LocomotiveScroll/SmoothScroll";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "7CTECH",
  description: "Developed By Rehan Sandali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        <main>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
