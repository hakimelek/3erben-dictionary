import NewWord from "@/components/new-word";
import SideBar from "@/components/sidebar";

export default function Index() {
  return (
    <main>
      <div className="grid gap-4 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
        <NewWord />
        <div className="md:flex hidden flex-col gap-2 md:order-first">
          <SideBar />
        </div>
      </div>
    </main>
  );
}
