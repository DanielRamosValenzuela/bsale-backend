const dbconfig = require("../../database/dbconfig");
const util = require("util");

const query = util.promisify(dbconfig.query).bind(dbconfig);

const searchByCategory = async (idCategory) => {
  try {
    let queryString = "select * from product where category =" + idCategory;

    queryString = "select * from product where category =" + idCategory;
    const result = await query(queryString);

    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchByCategory;
