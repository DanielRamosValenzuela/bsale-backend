const dbconfig = require("../database/dbconfig");
const util = require("util");

const query = util.promisify(dbconfig.query).bind(dbconfig);

const readProduct = async (searchKeyword) => {
  try {
    let queryString = "select * from product order by category";

    if (!!searchKeyword)
      queryString =
        "select * from product where name like '%" +
        searchKeyword +
        "%' order by category";

    const result = await query(queryString);

    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = readProduct;
