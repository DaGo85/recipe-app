import React from "react";
import { tagList } from "../../../assets/data";

function RecipesFilterByTag({ tag, setTag }) {
  const activateAll = () => {
    setTag(tagList);
  };

  const removeAll = () => {
    setTag([]);
  };

  return (
    <div>
      <ul className="">
        {tagList.map((tagM) => (
          <li key={tagM}>
            {tag.includes(tagM) ? (
              <div
                key={tagM}
                className="cursor-pointer "
                onClick={() =>
                  setTag((prevTag) => prevTag.filter((f) => f !== tagM))
                }
              >
                {tagM}
              </div>
            ) : (
              <div
                key={tagM}
                className="cursor-pointer "
                onClick={() => setTag((prevTag) => [...prevTag, tagM])}
              >
                {tagM}
              </div>
            )}
          </li>
        ))}
        {tag.length > 0 ? (
          <li className="cursor-pointer " onClick={removeAll}>
            remove all
          </li>
        ) : (
          <li className="cursor-pointer " onClick={activateAll}>
            add all
          </li>
        )}
      </ul>
    </div>
  );
}

export default RecipesFilterByTag;
