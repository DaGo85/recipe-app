const fs = require("fs");
const db = require("../models");

const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    console.log("upload" + req.file);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    Image.create({
      type: req.body.mimetype,
      name: req.body.originalname,
      data: fs.readFileSync(__basedir + "/uploads/" + req.body.url),
    }).then((image) => {
      fs.writeFileSync(__basedir + "/tmp/" + image.name, image.data);
      console.log("test");
      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};
module.exports = {
  uploadFiles,
};
