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

export default function ReportWord({ word }) {
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Perform the POST request to the server
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/word/${word.id}/report`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: word.id,
            explain: formData.get("explain"),
          }),
        },
      );

      if (response.ok) {
        // Handle success - maybe clear the form or show a success message
        alert(
          "Thank you for your report! We will review it and take action if necessary.",
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
                  <path
                    fillRule="evenodd"
                    d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                Report a problem with the word
                <span></span>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="py-3">
                <p className="text-md">
                  You are reporting the word: <strong>{word.name}</strong>
                </p>
                <p className="text-md">
                  Definition: <strong>{word.definition}</strong>
                </p>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <Label htmlFor="explain">Explain the problem</Label>
              <Textarea
                id="explain"
                name="explain"
                required
                className="h-32"
                placeholder="Please explain the problem with this word"
              />

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
