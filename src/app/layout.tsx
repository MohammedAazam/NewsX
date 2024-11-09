import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./globals.css";

export const metadata: Metadata = {
  title: "NewsX",
  icons: {
    icon: "/favicon.ico",
  },
  description: "A New Gen-News platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-10 my-2">
        <div className="flex justify-center items-center h-14 ">
          <div className="flex-none">
            <h1 className="text-lg font-bold tracking-wider">NewsX</h1>
          </div>
          <div className="text-bold ml-6">|</div>
          <div className="grow mx-2">
            <Link href="/" passHref>
              <Button variant="link">Home</Button>
            </Link>
            <Link href="/subscription" passHref>
              <Button variant="link">Subscription</Button>
            </Link>
          </div>
          <div className="flex-none mx-2">
            <Link href="/publish" passHref>
              <Button>Publish</Button>
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
