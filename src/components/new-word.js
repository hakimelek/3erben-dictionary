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
          }),
        },
      );

      if (response.ok) {
        // Handle success - maybe clear the form or show a success message
        alert("Word submitted successfully!");
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
    <div className="grid gap-4 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
      <div className="flex flex-col gap-4">
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
              <Button className="w-full" type="submit">
                Submit Word
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-2 md:order-first">
        <SideBar />
      </div>
    </div>
  );
}
