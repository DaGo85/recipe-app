//Function for getting 3 out of 8 random facts as array

const tagList = [
  "Glutenfree",
  "Sorbitfree",
  "Lactosefree",
  "Fructosefree",
  "Vegan",
  "Frugal",
];

const getAvgRecipes = (data) => {
  return (
    data.length / [...new Set(data.map((item) => item.username))].length
  ).toFixed(2);
};

const getTagOccurence = (data) => {
  const result = {
    Glutenfree: 0,
    Sorbitfree: 0,
    Lactosefree: 0,
    Fructosefree: 0,
    Vegan: 0,
    Frugal: 0,
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

  try {
    saveFact.push({
      keyword: "Recipes: ",
      fact: getAvgRecipes(data),
      text: "That many recipes each active user uploads in average",
    });

    saveFact.push({
      keyword: "Most used Tag: ",
      fact: getTagOccurence(data).most,
      text: "This is the most used tag with an occurence of: ",
      fact2: getTagOccurence(data).most2,
    });

    saveFact.push({
      keyword: "Least used tag is: ",
      fact: getTagOccurence(data).rare,
      text: "The less used tag has an occurence of: ",
      fact2: getTagOccurence(data).rare2,
    });

    saveFact.push({
      keyword: "Most active user: ",
      fact: getActiveUser(data).most,
      text: "The most active user has created ",
      fact2: getActiveUser(data).most2,
      text2: " recipes",
    });

    saveFact.push({
      keyword: "Number of ingredients: ",
      fact: getIngredients(data),
      text: "This is the average number of ingredients used in our recipes",
    });

    saveFact.push({
      keyword: "Recipes: ",
      fact: getRecipesCount(data),
      text: "The total amount of recipes available for you",
    });

    saveFact.push({
      keyword: "Difficulty: ",
      fact: getAvgDifficulty(data),
      text: "The average difficulty of all recipes out of ten",
    });

    saveFact.push({
      keyword: "Recipes last 30 days: ",
      fact: getLastRecipes(data),
      text: "That many recipes were created by our users in the last 30 days",
    });
  } catch (err) {
    console.log(err);
  }

  const shuffled = saveFact.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, 3);
};

module.exports = getFacts;
