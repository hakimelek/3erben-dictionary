"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const RefreshButtonRandomWord = () => {
  const router = useRouter();

  const handleRefresh = async () => {
    router.refresh();
  };
  return (
    <Button className="w-full" variant="outline" onClick={handleRefresh}>
      Give me a new word
    </Button>
  );
};

export default RefreshButtonRandomWord;
