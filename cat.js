const fs = require("fs");

module.exports = (fileName) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log("huhhhhh???", data);
    }
  });
};
