import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SearchInput from "@/components/searchInput";
import Provider from "@/components/provider";
import ContextSwitcher from "@/components/contextSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3urban Dictionary - The dictionary bel Gejmi",
  description: "Tunisian slang dictionary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <Provider>
        <body
          className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}
        >
          <div
            key="1"
            className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-3 md:px-6"
          >
            <header className="flex flex-col justify-between space-y-2 md:flex-row">
              <Link
                className="text-2xl flex items-center gap-2 font-bold md:text-3xl"
                href="/"
              >
                3urban Dictionary 🇹🇳
              </Link>

              <nav className="flex items-center">
                <SearchInput />
                <Link className="font-medium underline" href="/new">
                  <button className="p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </Link>
                <Link className="font-medium underline" href="/random">
                  <button className="p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                      />
                    </svg>
                  </button>
                </Link>
                <ContextSwitcher />
              </nav>
            </header>
            <main>{children}</main>
          </div>
        </body>
      </Provider>
    </html>
  );
}
