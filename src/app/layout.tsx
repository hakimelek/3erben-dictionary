import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SearchInput from "@/components/searchInput";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3erben Dictionary - The dictionary for the 3erbens",
  description: "Tunisian slang dictionary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          key="1"
          className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-2 md:px-6"
        >
          <header className="flex flex-col justify-center space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <Link
              className="text-l flex items-center gap-2 font-bold md:text-3xl"
              href="/"
            >
              3erben Dictionary
            </Link>
            <nav className="flex items-center gap-4">
              <Link className="font-medium underline" href="/new">
                Add a Word
              </Link>
              <Link className="font-medium underline" href="/random">
                Random
              </Link>
            </nav>
            <SearchInput />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
