import { Suspense } from "react";
import ReportWord from "@/components/report-word";

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
    <Suspense fallback={<div></div>}>
      {!word.error ? (
        <ReportWord word={word} />
      ) : (
        <div className="flex p-5 align-middle">No such word found</div>
      )}
    </Suspense>
  );
}
