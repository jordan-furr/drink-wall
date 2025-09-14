import type { Metadata } from "next";
import "../globals.css";
import { SanityLive } from '@/sanity/lib/live'
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "drink-wall",
  description: "visual food + drink displays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <body>
        {children}
        <SanityLive />
      </body>
    </>
  );
}
