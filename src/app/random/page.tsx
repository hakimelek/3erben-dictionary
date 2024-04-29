import { Suspense } from "react";
import WordCard from "@/components/wordcard";
import SideBar from "@/components/sidebar";
import { Button } from "@/components/ui/button";

async function getRandomWord() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/word/random`, {
    cache: "no-store",
  });

  if (!res?.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const word = await getRandomWord();

  return (
    <div className="grid gap-4 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
      <div className="flex flex-col gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          <WordCard key={word.name} word={word} noLink />
        </Suspense>
        <div className="w-full">
          <form>
            <Button className="w-full" variant="outline" type="submit">
              Give me a new word
            </Button>
          </form>
        </div>
      </div>
      <div className="md:flex  flex-col gap-2 md:order-first hidden">
        <SideBar />
      </div>
    </div>
  );
}
