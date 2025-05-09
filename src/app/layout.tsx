import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";
import LoadingWrapper from "@/components/LoadingWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Heroes of Hyderabad",
  description: "Celebrating the unsung heroes who make Hyderabad extraordinary",
  keywords: "Heroes of Hyderabad, Awards, Recognition, Community, Hyderabad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable}`}>
      <body className="bg-black text-white">
        <LoadingWrapper>
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
