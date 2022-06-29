//Single fact Card component

import HighlightText from "../../../components/elements/HighlightText";

function StatisticsFact({ fact, icon }) {
  return (
    <div
      className="rounded-card bg-secondaryLightContainer dark:bg-secondaryDarkContainer text-secondaryLightContainerOn dark:text-secondaryDarkContainerOn p-4
    flex flex-col py-6 items-center gap-6 m-2 max-w-[310px] md:max-w-md h-72"
    >
      <svg
        className={`flex fill-secondaryLightContainerOn dark:fill-secondaryDarkContainerOn ${icon.width}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.viewBox}
      >
        <path d={icon.d} />
      </svg>
      <h3 className="text-3xl">
        {fact.keyword}
        <HighlightText text={fact.fact} />
      </h3>
      <p>
        {fact.text}
        {fact.fact2 && <HighlightText text={fact.fact2} />}
        {fact.text2}
      </p>
    </div>
  );
}

export default StatisticsFact;
