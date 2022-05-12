import http from "../http-common";

const getAll = () => {
  return http.get("/recipes");
};

const get = (id) => {
  return http.get(`/recipes/${id}`);
};

const create = (data) => {
  return http.post("/recipes", data);
};

const update = (id, data) => {
  return http.put(`/recipes/${id}`, data);
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

const addImages = (data) => {
  return http.post("/recipes/upload", data);
};

const getTags = () => {
  return http.get("/recipes/tag");
};

const addTag = (data) => {
  return http.post("/recipes/tag", data);
};
const RecipeService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  addImages,
  getTags,
  addTag,
};

export default RecipeService;
