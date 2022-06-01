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

const getFacts = (data) => {
  const saveFact = [];

  saveFact.push({
    text: "Recipes each active user uploads in average: ",
    fact: getAvgRecipes(data),
  });

  saveFact.push({
    text: "The most used Tag is: ",
    fact: getTagOccurence(data).most,
    text2: "with occurence of: ",
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

  saveFact.push({ text: "c", fact: "test" });

  return saveFact;
};

module.exports = getFacts;
