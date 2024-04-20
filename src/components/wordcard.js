import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import WorkVotes from "@/components/word-votes";
import Link from "next/link";

const WordCard = ({ word, noLink }) => {
  const { name, definition, exampleSentences, isTop } = word;

  const topFlag = isTop ? "🔥" : "";

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          {noLink ? (
            <CardTitle className="text-blue-300">
              {name} {topFlag}
            </CardTitle>
          ) : (
            <Link href={`/word/${word.id}`}>
              <CardTitle className="text-blue-300">
                {name} {topFlag}
              </CardTitle>
            </Link>
          )}
          <CardDescription className="text-lg text-gray-900 dark:text-gray-100">
            {definition}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {exampleSentences && exampleSentences.length > 0 && (
              <div className="grid gap-2">
                <div className="font-semibold">Example sentences</div>
                <ul className="grid list-disc gap-2 pl-6">
                  {exampleSentences.map((sentence) => (
                    <li key={sentence}>{sentence}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <WorkVotes word={word} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default WordCard;
