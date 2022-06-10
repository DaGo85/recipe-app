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

const create = (data, headers) => {
  return http.post("/recipes", data, { headers: headers });
};

const update = (title, data, headers) => {
  return http.put(`/recipes/${title}`, data, { headers: headers });
};

const remove = (id, headers) => {
  return http.delete(`/recipes/${id}`, { headers: headers });
};

const findByTitle = (title) => {
  return http.get(`/recipes?title=${title}`);
};

const facts = () => {
  return http.get("/recipes/facts");
};

const addImages = (data, headers) => {
  return http.post("/recipes/upload", data, { headers: headers });
};

const RecipeService = {
  getAll,
  get,
  getLast,
  create,
  update,
  remove,
  findByTitle,
  facts,
  addImages,
};

export default RecipeService;
