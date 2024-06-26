"use client";

import { Input } from "@/components/ui/input";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SideBar from "./sidebar";
import { useRouter } from "next/navigation";
import { TAGS } from "@/lib/constants";

export default function NewWord() {
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Perform the POST request to the server
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/word/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("word"),
            definition: formData.get("definition"),
            exampleSentences: formData.get("example"),
            tags: formData.getAll("tags").join(","),
          }),
        },
      );

      if (response.ok) {
        // Handle success - maybe clear the form or show a success message
        alert(
          "Thank you for your contribution! Your word will show up in the next 48 hours if approved",
        );
        router.push(`/`);
      } else {
        // Handle error - maybe show an error message
        alert("Failed to submit word.");
      }
    } catch (error) {
      console.error("There was an error submitting the new word:", error);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Add a New Word</CardTitle>
          <CardDescription>
            Contribute to the 3erben Dictionary by adding a new word.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="word">Word</Label>
              <Input name="word" id="word" placeholder="Enter the word" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="definition">Definition</Label>
              <Textarea
                name="definition"
                id="definition"
                placeholder="Enter the definition"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="example">Example Sentence</Label>
              <Textarea
                id="example"
                name="example"
                placeholder="Provide an example sentence"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="tags">Tags</Label>
              <div className="grid gap-2">
                {TAGS.map((tag) => (
                  <div key={tag.slug}>
                    <input
                      type="checkbox"
                      id={tag.slug}
                      name="tags"
                      value={tag.slug}
                    />
                    <label className="pl-2" htmlFor={tag.slug}>
                      {tag.name}
                    </label>
                  </div>
                ))}
              </div>
              <Input
                name="tags"
                id="tags"
                placeholder="Enter additional tags, comma separated"
              />
            </div>
            <Button className="w-full" type="submit">
              Submit Word
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
