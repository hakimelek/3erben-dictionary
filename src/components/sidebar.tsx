import TopWords from "@/components/top-words";
import Tags from "@/components/tags";
import Alphabets from "@/components/alphabets";
import Contribute from "@/components/contribute";

const SideBar = () => {
  return (
    <div>
      <div className="mb-4 hidden md:block">
        <Contribute />
      </div>
      <div className="mb-4 hidden md:block">
        <TopWords />
      </div>
      <div className="mb-4 hidden md:block">
        <Tags />
      </div>
      <div className="mb-4 hidden md:block">
        <Alphabets />
      </div>
    </div>
  );
};

export default SideBar;
