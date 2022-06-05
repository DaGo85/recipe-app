import React from "react";

function StatisticsFact({ fact, icon }) {
  return (
    <div key={fact.fact} className="statistics-fact">
      <svg
        className="w-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.viewBox}
      >
        <path d={icon.d} />
      </svg>
      <h3>{fact.fact}</h3>
      <p>
        {fact.text}
        {fact.fact2}
      </p>
    </div>
  );
}

export default StatisticsFact;
