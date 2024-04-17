import { Suspense } from "react";
import WordCard from "@/components/wordcard";
import SideBar from "@/components/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const revalidate = 1; // revalidate at most every hour

async function getWords({ offset, limit, query }) {
  const res = await fetch(
    `${process.env.API_URL}/words?offset=${offset}&limit=${limit}&query=${query}`,
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
      <div className="flex flex-col gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          {words.map((word) => {
            return <WordCard key={word.name} word={word} />;
          })}

          {wordCount === 0 && (
            <div className="p-4 pb-3.5 text-center">
              <p>No words found</p>
            </div>
          )}
        </Suspense>
        <div className="flex justify-between py-2">
          {parseInt(page, 10) > 1 && (
            <Link href={`/words/${parseInt(page, 10) - 1}`}>
              <button>Previous</button>
            </Link>
          )}
          <div className="ml-auto">
            {wordCount === limit && (
              <Link href={`/words/${parseInt(page, 10) + 1}`}>
                <button>Next</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:order-first">
        <SideBar />
      </div>
    </div>
  );
}
