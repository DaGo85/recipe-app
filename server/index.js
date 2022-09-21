//index file for handling node.js app

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const decodeIDToken = require("./utility/authenticateToken");

const app = express();

const whitelist = [process.env.CORS1, process.env.CORS2];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(decodeIDToken);
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

// for dev only:
/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/

db.sequelize.sync();

require("./routes/recipe.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
