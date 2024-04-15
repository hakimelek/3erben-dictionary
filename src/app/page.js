import { Suspense } from "react";
import WordCard from "@/components/wordcard";
import SideBar from "@/components/sidebar";
import Link from "next/link";

export const revalidate = 1; // revalidate at most every hour

async function getWords({ offset, limit }) {
  const res = await fetch(
    `${process.env.URL}/api/words?offset=${offset}&limit=${limit}`,
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const words = await getWords({
    offset: 0,
    limit: 15,
  });

  return (
    <div className="grid gap-4 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
      <div className="flex flex-col gap-2">
        <SideBar />
      </div>
      <div className="flex flex-col gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          {words.map((word) => {
            return <WordCard key={word.name} word={word} />;
          })}
        </Suspense>
        <Link href={`/words/2`}>
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
