import React, { useState } from "react";

function RecipesFilterByTag({ tag, setTag }) {
  const tagMock = ["a", "b", "c", "d", "e"];
  const [activeTags, setSactiveTags] = useState();

  const activateAll = () => {
    setTag(tagMock);
  };

  return (
    <div>
      <ul classname="">
        {tagMock.map((tagM) => (
          <>
            {tag.includes(tagM) ? (
              <li
                classname=""
                onClick={() =>
                  setTag((prevTag) => prevTag.filter((f) => f !== tagM))
                }
              >
                {tagM}
              </li>
            ) : (
              <li
                classname=""
                onClick={() => setTag((prevTag) => [...prevTag, tagM])}
              >
                {tagM}
              </li>
            )}
          </>
        ))}
        <li classname="" onClick={activateAll}>
          all
        </li>
      </ul>
    </div>
  );
}

export default RecipesFilterByTag;
