const { Router } = require("express");

const {
  readProductCtrl,
  readCategoryCtrl,
  searchByCategoryCtrl,
} = require("./controllers/product");

const router = Router();

router.get("/readproduct", readProductCtrl);

router.get("/readcategory", readCategoryCtrl);

router.get("/searchcategory/:id", searchByCategoryCtrl);

module.exports = router;
