import { Suspense } from "react";
import WordCard from "@/components/wordcard";
import SideBar from "@/components/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const revalidate = 1; // revalidate at most every hour

async function getWords({ offset, limit }) {
  const res = await fetch(
    `${process.env.API_URL}/words?offset=${offset}&limit=${limit}`,
  );

  if (!res?.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.error("Failed to fetch words");
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
      <div className="flex flex-col gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          {words.map((word) => {
            return <WordCard key={word.name} word={word} />;
          })}
        </Suspense>
        <div className="ml-auto">
          <Link href={`/words/2`}>
            <Button variant="secondary" className="min-w-20">
              Next
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:order-first">
        <SideBar />
      </div>
    </div>
  );
}
