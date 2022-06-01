import http from "../http-common";

const getAll = () => {
  return http.get("/recipes");
};

const get = (title) => {
  return http.get(`/recipes/${title}`);
};

const getLast = () => {
  return http.get("/recipes/last");
};

const create = (data) => {
  return http.post("/recipes", data);
};

const update = (title, data) => {
  return http.put(`/recipes/${title}`, data);
};

const remove = (id) => {
  return http.delete(`/recipes/${id}`);
};

const removeAll = () => {
  return http.delete(`/recipes`);
};

const findByTitle = (title) => {
  return http.get(`/recipes?title=${title}`);
};

const facts = () => {
  return http.get("/recipes/facts");
};

const addImages = (data) => {
  return http.post("/recipes/upload", data);
};

const RecipeService = {
  getAll,
  get,
  getLast,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  facts,
  addImages,
};

export default RecipeService;
