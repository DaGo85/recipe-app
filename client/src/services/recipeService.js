//Service for handling api requests

import http from "../http-common";

//get all recipes
const getAll = () => {
  return http.get("/recipes");
};

//get recipe by title
const get = (title) => {
  return http.get(`/recipes/${title}`);
};

//get last recipe
const getLast = () => {
  return http.get("/recipes/last");
};

//create recipe
const create = (data, headers) => {
  return http.post("/recipes", data, { headers: headers });
};

//update/edit recipe
const update = (title, data, headers) => {
  return http.put(`/recipes/${title}`, data, { headers: headers });
};

//delete recipe by id
const remove = (id, headers) => {
  return http.delete(`/recipes/${id}`, { headers: headers });
};

//get random facts about all recipes
const facts = () => {
  return http.get("/recipes/facts");
};

const RecipeService = {
  getAll,
  get,
  getLast,
  create,
  update,
  remove,
  facts,
};

export default RecipeService;
