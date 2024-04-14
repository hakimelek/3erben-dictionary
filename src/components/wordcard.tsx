import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WordCard = ({ word }) => {
  const { name, definition, exampleSentences, likes, dislikes } = word;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {definition}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-semibold">Example sentences</div>
            {exampleSentences && exampleSentences.length > 0 && (
              <ul className="grid list-disc gap-2 pl-6">
                {exampleSentences.map((sentence) => (
                  <li key={sentence}>{sentence}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Button variant="outline">👍 7tab fik tab +{likes}</Button>
          <Button variant="outline">👎 fachla fel bachla -{dislikes}</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WordCard;