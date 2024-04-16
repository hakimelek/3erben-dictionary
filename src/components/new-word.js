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
import { useState } from "react";

export default function NewWord() {
  // Add fetch logic to submit the new word using /api/word as a POST request
  // The body of the request should be the word, definition, and example sentence
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [example, setExample] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the payload
    const payload = {
      word,
      definition,
      example,
    };

    // Perform the POST request to the server
    try {
      const response = null;
      // const response = await fetch(`/api/word`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(payload),
      // });

      if (response?.ok) {
        // Handle success - maybe clear the form or show a success message
        alert("Word submitted successfully!");
        setWord("");
        setDefinition("");
        setExample("");
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
      <div className="hidden flex-col gap-2 md:flex">
        <SideBar />
      </div>
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
                <Input id="word" placeholder="Enter the word" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="definition">Definition</Label>
                <Textarea id="definition" placeholder="Enter the definition" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="example">Example Sentence</Label>
                <Textarea
                  id="example"
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
    </div>
  );
}
