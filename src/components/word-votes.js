"use client";
import { Button } from "@/components/ui/button";
import { useOptimistic } from "react";

const WordVotes = (word) => {
  const [optimisticLikeVotes, addoptimisticLikeVotes] = useOptimistic(
    word?.likes || 0, // Default to 0 likes if null
    (state, l) => state + 1,
  );
  const [optimisticDislikeVotes, addoptimisticDislikeVotes] = useOptimistic(
    word?.dislikes || 0, // Default to 0 dislikes if null
    (state, l) => state + 1,
  );

  const like = async () => {
    addoptimisticLikeVotes(1); // Optimistically increment the like count

    console.log('id: word.id, action: "like"', word);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/word/vote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: word.id, action: "like" }),
      },
    );

    if (response.ok) {
      // Handle success - maybe clear the form or show a success message
    } else {
      // Handle error - maybe show an error message
    }
  };

  const dislike = async () => {
    addoptimisticDislikeVotes(1);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/word/vote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: word.id, action: "dislike" }),
      },
    );

    if (response.ok) {
      // Handle success - maybe clear the form or show a success message
    } else {
      // Handle error - maybe show an error message
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button onClick={like} size="sm" variant="outline">
        👍 {word?.likes || 0}
      </Button>
      <Button onClick={dislike} size="sm" variant="outline">
        👎 {word?.dislikes || 0}
      </Button>
    </div>
  );
};

export default WordVotes;
