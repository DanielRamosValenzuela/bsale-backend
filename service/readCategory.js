const dbconfig = require("../database/dbconfig");
const util = require("util");

const query = util.promisify(dbconfig.query).bind(dbconfig);

const readCategory = async () => {
  try {
    let queryString = "select * from category";

    const result = await query(queryString);

    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = readCategory;
