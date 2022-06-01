const getFacts = () => {
  const getTagOccurene = () => {
    const array = recipesData;
    array
      .sort(
        (a, b) =>
          array.filter((v) => v === a).length -
          array.filter((v) => v === b).length
      )
      .pop();
  };
  const saveFact = [];

  saveFact.push({
    text: "Recipes each active user uploads in average: ",
    fact:
      recipesData.length /
      recipesData.filter((v, i, a) => a.indexOf(v) === i).length,
  });

  saveFact.push({
    text: "The most used Tag is: ",
    fact: getTagOccurene,
  });

  setFacts(saveFact);
};

export default getFacts;
