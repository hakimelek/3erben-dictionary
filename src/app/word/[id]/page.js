import { Suspense } from "react";
import WordCard from "@/components/wordcard";
import SideBar from "@/components/sidebar";

async function getWord(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/word/${id}`, {
    cache: "no-store",
  });

  if (!res?.ok) {
    // This will activate the closest `error.js` Error Boundary
    // console.error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }) {
  const word = await getWord(params.id);
  return (
    <div className="grid gap-4 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
      <div className="flex flex-col gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          {!word.error ? (
            <WordCard key={word.name} word={word} />
          ) : (
            <div className="flex p-5 align-middle">No such word found</div>
          )}
        </Suspense>
      </div>
      <div className="md:flex hidden flex-col gap-2 md:order-first">
        <SideBar />
      </div>
    </div>
  );
}
