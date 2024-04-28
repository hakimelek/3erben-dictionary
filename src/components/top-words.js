import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

async function getTopWords({ limit }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/words/top?limit=${limit}`,
    {
      cache: "no-store",
    },
  );

  if (!res?.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.error("Failed to fetch data");
  }

  return res.json();
}

const TopWords = async () => {
  const topWords = await getTopWords({
    limit: 5,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Words 🔥</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <ol className="grid list-decimal gap-2 pl-6">
          {topWords.map((word) => (
            <li key={word.id}>
              {" "}
              <Link href={`/word/${word.id}`}>{word.name}</Link>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default TopWords;
