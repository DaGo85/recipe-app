const fs = require("fs");
const db = require("../models");

const Image = db.images;

const uploadFiles = async (req, res) => {
  const auth = req.currentUser;
  if (!auth) res.status(403).send("Not authorized!");

  try {
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    console.log(req.body);

    Image.create({
      type: req.file.mimetype,
      name: req.file.filename,
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
