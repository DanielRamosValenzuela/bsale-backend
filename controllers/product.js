const { response } = require("express");

const readProduct = require("../service/readProduct");
const readCategory = require("../service/readCategory");
const searchByCategory = require("../service/searchByCategory");

const readProductCtrl = async (req, res = response) => {
  const searchKeyword = req.query.searchKeyword;

  try {
    const data = await readProduct(searchKeyword);

    res.json({
      ok: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Favor hablar con al administrador",
    });
  }
};

const searchByCategoryCtrl = async (req, res = response) => {
  const searchCategory = req.params.idCategory;

  try {
    const data = await searchByCategory(searchCategory);

    res.json({
      ok: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Favor hablar con al administrador",
    });
  }
};

const readCategoryCtrl = async (req, res = response) => {
  try {
    const data = await readCategory();

    res.json({
      ok: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Favor hablar con al administrador",
    });
  }
};

module.exports = {
  readProductCtrl,
  readCategoryCtrl,
  searchByCategoryCtrl,
};
