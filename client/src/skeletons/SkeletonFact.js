import SkeletonIcon from "./SkeletonIcon";
import SkeletonText from "./SkeletonText";

function SkeletonFact() {
  return (
    <div className="statistics-fact w-full flex flex-col p-10">
      <div className="pt-4">
        <SkeletonIcon />
      </div>
      <div className="w-full flex flex-col gap-2">
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
      </div>
    </div>
  );
}

export default SkeletonFact;
