const tagList = [
  "Glutenfree",
  "Sorbitfree",
  "Lactosefree",
  "Fructosefree",
  "Meatfree",
];

const getAvgRecipes = (data) => {
  return data.length / [...new Set(data.map((item) => item.username))].length;
};

const getTagOccurence = (data) => {
  const result = {
    Glutenfree: 0,
    Sorbitfree: 0,
    Lactosefree: 0,
    Fructosefree: 0,
    Meatfree: 0,
  };

  tagList.map((t) => {
    data.map((v) => {
      v.tags.includes(t) && result[t]++;
    });
  });

  return {
    most: Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b)),
    most2:
      result[
        Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b))
      ],
    rare: Object.keys(result).reduce((a, b) => (result[a] < result[b] ? a : b)),
    rare2:
      result[
        Object.keys(result).reduce((a, b) => (result[a] < result[b] ? a : b))
      ],
  };
};

const getActiveUser = (data) => {
  let allUsers = new Set();

  data.map((v) => {
    allUsers.add(v.username);
  });

  allUsers = Array.from(allUsers);

  const allUsersCounter = Object.assign(
    ...Array.from(allUsers, (v) => ({ [v]: 0 }))
  );

  allUsers.map((u) => {
    data.map((v) => v.username === u && allUsersCounter[u]++);
  });

  return {
    most: Object.keys(allUsersCounter).reduce((a, b) =>
      allUsersCounter[a] > allUsersCounter[b] ? a : b
    ),
    most2:
      allUsersCounter[
        Object.keys(allUsersCounter).reduce((a, b) =>
          allUsersCounter[a] > allUsersCounter[b] ? a : b
        )
      ],
  };
};

const getIngredients = (data) => {
  let ingredientsCounter = 0;

  data.forEach((v) => {
    ingredientsCounter = ingredientsCounter + v.ingredients.length;
  });

  return (ingredientsCounter / data.length).toFixed(2);
};

const getRecipesCount = (data) => {
  return data.length;
};

const getAvgDifficulty = (data) => {
  let difficultyCounter = 0;

  data.forEach((v) => {
    difficultyCounter = difficultyCounter + parseInt(v.difficulty);
  });

  return (difficultyCounter / data.length).toFixed(2);
};

const getLastRecipes = (data) => {
  let date = new Date();
  date.setDate(date.getDate() - 30);

  const last30Data = data.filter((v) => v.createdAt > date);

  return last30Data.length;
};

const getFacts = (data) => {
  const saveFact = [];

  saveFact.push({
    fact: `Recipes: ${getAvgRecipes(data)}`,
    text: "That many recipes each active user uploads in average",
  });

  saveFact.push({
    keyword: "Most used Tag: ",
    text: "This is the most used tag with an occurence of: ",
    fact: getTagOccurence(data).most,
    fact2: getTagOccurence(data).most2,
  });

  saveFact.push({
    text: "The less used Tag is: ",
    fact: getTagOccurence(data).rare,
    text2: "with occurence of: ",
    fact2: getTagOccurence(data).rare2,
  });

  saveFact.push({
    text: "The most active user is: ",
    fact: getActiveUser(data).most,
    text2: "with created recipes: ",
    fact2: getActiveUser(data).most2,
  });

  saveFact.push({
    text: "The average number of ingredients used in our recipes is: ",
    fact: getIngredients(data),
  });

  saveFact.push({
    text: "Amount of Recipes for you: ",
    fact: getRecipesCount(data),
  });

  saveFact.push({
    text: "Average difficulty: ",
    fact: getAvgDifficulty(data),
    text2: "/ 10",
  });

  saveFact.push({
    text: "Amount of Recipes created in the last 30 days: ",
    fact: getLastRecipes(data),
  });

  const shuffled = saveFact.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, 3);
};

module.exports = getFacts;
