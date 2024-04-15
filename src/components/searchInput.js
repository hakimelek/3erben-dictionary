"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function Page() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    router.push(`/words/1?query=${formData.get("query")}`);
  };

  return (
    <form className="flex-1 md:ml-auto" onSubmit={handleSubmit}>
      <Input name="query" placeholder="Search..." type="search" />
    </form>
  );
}
