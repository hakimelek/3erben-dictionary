"use client";
import { Button } from "@/components/ui/button";
import { useOptimistic, startTransition, useState } from "react";

const WordVotes = ({ word }) => {
  const [likes, setLikes] = useState(word?.likes || 0);
  const [dislikes, setDislikes] = useState(word?.dislikes || 0);

  const [optimisticLikeVotes, addoptimisticLikeVotes] = useOptimistic(
    likes || 0, // Default to 0 likes if null
    (state, newVote) => state + newVote,
  );
  const [optimisticDislikeVotes, addoptimisticDislikeVotes] = useOptimistic(
    dislikes || 0, // Default to 0 dislikes if null
    (state, newVote) => state + newVote,
  );

  const like = async () => {
    startTransition(async () => {
      addoptimisticLikeVotes(1); // Optimistically increment the like count

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
        const newWord = await response.json();
        setLikes(newWord.likes);
        setDislikes(newWord.dislikes);
      } else {
        // Handle error - maybe show an error message
      }
    });
  };

  const dislike = async () => {
    startTransition(async () => {
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
        const newWord = await response.json();
        setLikes(newWord.likes);
        setDislikes(newWord.dislikes);
      } else {
        // Handle error - maybe show an error message
      }
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button onClick={like} size="xs" variant="outline" className="p-1">
        👍 {optimisticLikeVotes || 0}
      </Button>
      <Button onClick={dislike} size="xs" variant="outline" className="p-1">
        👎 {optimisticDislikeVotes || 0}
      </Button>
    </div>
  );
};

export default WordVotes;
