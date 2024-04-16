import { Suspense } from "react";
import WordCard from "@/components/wordcard";
import SideBar from "@/components/sidebar";
import Link from "next/link";

export const revalidate = 1; // revalidate at most every hour

async function getWords({ offset, limit, query }) {
  const res = await fetch(
    `${process.env.URL}/api/words?offset=${offset}&limit=${limit}&query=${query}`,
  );

  if (!res?.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params: { page }, searchParams }) {
  const pageNum = page ? parseInt(page, 10) : 1;
  const limit = 15;
  const { query } = searchParams;

  const words = await getWords({
    offset: 0 + (pageNum - 1) * 15,
    limit,
    query: query || "",
  });

  const wordCount = words.length;

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
        <div className="grid gap-4 py-3">
          {parseInt(page, 10) > 1 && (
            <Link href={`/words/${parseInt(page, 10) - 1}`}>
              <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                Previous
              </button>
            </Link>
          )}
          {wordCount === limit && (
            <Link href={`/words/${parseInt(page, 10) + 1}`}>
              <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                Next
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
