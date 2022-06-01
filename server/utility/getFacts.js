//  data.filter((v, i, a) => a.indexOf(v) === i).length;

const getAvgRecipes = (data) => {
  return data.length / [...new Set(data.map((item) => item.username))].length;
};

const getTagOccurene = (data) => {
  const array = recipesData;
  array
    .sort(
      (a, b) =>
        array.filter((v) => v === a).length -
        array.filter((v) => v === b).length
    )
    .pop();
};

const getFacts = (data) => {
  const saveFact = [];

  saveFact.push({
    text: "Recipes each active user uploads in average: ",
    fact: getAvgRecipes(data),
  });

  saveFact.push({
    text: "The most used Tag is: ",
    fact: "test",
  });

  saveFact.push({ text: "a", fact: "test" });

  saveFact.push({ text: "b", fact: "test" });

  saveFact.push({ text: "c", fact: "test" });

  return saveFact;
};

module.exports = getFacts;
