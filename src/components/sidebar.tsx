import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SideBar = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Contribute</CardTitle>
          <CardDescription>
            Add a new word and definition to the dictionary.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Add a Word</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top Words</CardTitle>
          <CardDescription>
            The most searched words in the dictionary.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3">
          <ol className="grid list-decimal gap-2 pl-6">
            <li className="font-semibold">3erben</li>
            <li>Chbik</li>
            <li>Weld el 9a7ba</li>
            <li>Bouk</li>
            <li>7alouf</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default SideBar;
