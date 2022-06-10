function StatisticsFact({ fact, icon }) {
  return (
    <div className="statistics-fact">
      <svg
        className="w-12 fill-secondaryLightContainerOn dark:fill-secondaryDarkContainerOn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.viewBox}
      >
        <path d={icon.d} />
      </svg>
      <h3 className="text-3xl">
        {fact.keyword}
        <span className="highlight-gradient">{fact.fact}</span>
      </h3>
      <p>
        {fact.text}
        {fact.fact2 && <span className="highlight-gradient">{fact.fact2}</span>}
        {fact.text2}
      </p>
    </div>
  );
}

export default StatisticsFact;
