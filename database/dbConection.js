const dbconfig = require("./dbconfig");

const dbConnection = dbconfig.connect(function (error) {
  if (!!error) {
    console.log("Error", error);
  } else {
    console.log("Conected");
  }
});

module.exports = {
  dbConnection,
};
