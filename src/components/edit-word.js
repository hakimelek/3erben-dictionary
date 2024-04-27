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

export default function SuggestWordChange({ word }) {
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Perform the POST request to the server
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/word/${word.id}/suggest`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: word.id,
            change: formData.get("change"),
          }),
        },
      );

      if (response.ok) {
        // Handle success - maybe clear the form or show a success message
        alert(
          "Thank you for your suggestion! We will review it and take action if necessary.",
        );
        router.push(`/`);
      } else {
        // Handle error - maybe show an error message
        alert("Failed to submit word.");
      }
    } catch (error) {
      console.error("There was an error submitting the report", error);
    }
  };

  return (
    <div className="grid gap-4">
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>

                <span>Suggest changes to this word</span>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="py-3">
                <p className="text-md">
                  Word: <strong>{word.name}</strong>
                </p>
                <p className="text-md">
                  Definition:{" "}
                  {word.definition ? (
                    <strong>{word.definition}</strong>
                  ) : (
                    <i>Need definition</i>
                  )}
                </p>
                {word.exampleSentences.length > 0 && (
                  <div className="text-md">
                    Example:
                    <ul className="grid list-disc gap-2 pl-6">
                      {word.exampleSentences.map((sentence) => (
                        <li key={sentence}>{sentence}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <Label htmlFor="explain">Suggest a change for this word</Label>
              <Textarea
                id="change"
                name="change"
                required
                className="h-32"
                placeholder={`Provide details about the change you would like to suggest. \nFor example, you could suggest a new definition, a new example sentence, or a correction to the current definition or example sentence.`}
              />

              <Button className="w-full" type="submit">
                Submit Suggestion
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
