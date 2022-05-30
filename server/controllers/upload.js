const fs = require("fs");
const db = require("../models");

const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Image.create({
      type: req.body.mimetype,
      name: req.body.originalname,
      recipeId: req.body.recipeId,
      data: fs.readFileSync(__basedir + "/uploads/" + req.file.filename),
    }).then((image) => {
      fs.writeFileSync(__basedir + "/tmp/" + image.name, image.data);

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    return res.send(`Error when trying upload images: ${error}`);
  }
};
module.exports = {
  uploadFiles,
};
