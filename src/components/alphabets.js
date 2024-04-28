import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Link from "next/link";

const Alphabets = async () => {
  const alphabets = [
    { slug: "0", name: "0" },
    { slug: "1", name: "1" },
    { slug: "2", name: "2" },
    { slug: "3", name: "3" },
    { slug: "4", name: "4" },
    { slug: "5", name: "5" },
    { slug: "6", name: "6" },
    { slug: "7", name: "7" },
    { slug: "8", name: "8" },
    { slug: "9", name: "9" },
    { slug: "a", name: "A" },
    { slug: "b", name: "B" },
    { slug: "c", name: "C" },
    { slug: "d", name: "D" },
    { slug: "e", name: "E" },
    { slug: "f", name: "F" },
    { slug: "g", name: "G" },
    { slug: "h", name: "H" },
    { slug: "i", name: "I" },
    { slug: "j", name: "J" },
    { slug: "k", name: "K" },
    { slug: "l", name: "L" },
    { slug: "m", name: "M" },
    { slug: "n", name: "N" },
    { slug: "o", name: "O" },
    { slug: "p", name: "P" },
    { slug: "q", name: "Q" },
    { slug: "r", name: "R" },
    { slug: "s", name: "S" },
    { slug: "t", name: "T" },
    { slug: "u", name: "U" },
    { slug: "v", name: "V" },
    { slug: "w", name: "W" },
    { slug: "x", name: "X" },
    { slug: "y", name: "Y" },
    { slug: "z", name: "Z" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>By Letters</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <ol className="grid grid-cols-6 gap-2 pl-3 list-decimal">
          {alphabets.map((letter) => (
            <li key={letter.slug} className="flex">
              <Link
                href={`/words/1?startsWith=${letter.slug}`}
                className="hover:underline"
              >
                {letter.name}
              </Link>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default Alphabets;
