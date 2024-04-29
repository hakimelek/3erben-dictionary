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
  const { name, definition, exampleSentences, isTop, tags } = word;

  const topFlag = isTop ? (
    <div className="px-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
      </svg>
    </div>
  ) : (
    ""
  );
  const nsfwFlag = tags.includes("nsfw");

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-500 hover:text-blue-700 transition-colors duration-150 ease-in-out">
            <div className="flex flex-row justify-between items-center w-full">
              {noLink ? (
                `${name} ${topFlag}`
              ) : (
                <Link href={`/word/${word.id}`}>
                  <div className="flex flex-row">
                    {name} {topFlag}
                  </div>
                </Link>
              )}
              {nsfwFlag && <div className="flex text-base -pl-2">🔞</div>}
            </div>
          </CardTitle>

          <CardDescription
            className="text-lg text-gray-900 dark:text-gray-100"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {definition}
            <i>{!definition && "Needs definition, please suggest one"}</i>
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
          <div className="flex justify-between items-center w-full">
            <div>
              <WorkVotes word={word} />
            </div>
            <div className="flex gap-4">
              <Link
                href={`/word/${word.id}/suggest`}
                className="text-blue-300 hover:text-blue-700 transition-colors duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </Link>
              <Link
                href={`/word/${word.id}/report`}
                className="text-blue-300 hover:text-blue-700 transition-colors duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WordCard;
