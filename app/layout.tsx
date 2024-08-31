import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { cn } from "./utils/cn";

const sourceCodeProFont = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iwan.dev",
  description: "Personal site for Iwan Francis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(sourceCodeProFont.className, 'bg-gray-100')}>{children}</body>
    </html>
  );
}
