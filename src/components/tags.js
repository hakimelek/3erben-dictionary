import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Link from "next/link";
import { TAGS } from "@/lib/constants";

const Tags = async () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Collections</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <ol className="grid list-decimal gap-2 pl-6">
          {TAGS.map((tag) => (
            <li key={tag.slug}>
              {" "}
              <Link href={`/words/1?tags=${tag.slug}`}>{tag.name}</Link>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
};

export default Tags;
