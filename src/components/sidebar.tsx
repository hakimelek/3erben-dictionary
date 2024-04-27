import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TopWords from "@/components/top-words";
import Tags from "@/components/tags";

const SideBar = () => {
  return (
    <div>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Contribute</CardTitle>
          <CardDescription>
            Add a new word and definition to the dictionary.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/new">
            <Button className="w-full">Add a Word</Button>
          </Link>
        </CardContent>
      </Card>
      <div className="mb-4">
        <TopWords />
      </div>
      <Tags />
    </div>
  );
};

export default SideBar;
