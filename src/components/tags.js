import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Link from "next/link";

const Tags = async () => {
  const categories = [
    { slug: "nes-bkri", name: "Nes Bekri Kalou" },
    { slug: "animals", name: "7ayawenet" },
    { slug: "ghacha", name: "Ghacha (+18)" },
    { slug: "nsfw", name: "Mouch 9oddem Bouk (+18)" },
  ];
  return (
    <Card className="hidden md:block">
      <CardHeader>
        <CardTitle>Collections</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <ol className="grid list-decimal gap-2 pl-6">
          {categories.map((category) => (
            <li key={category.slug}>
              {" "}
              <Link href={`/words/1?tags=${category.slug}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default Tags;
