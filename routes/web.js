const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res, next) => {
  res.render("index.ejs");
});
router.get("/login", async (req, res, next) => {
  res.render("login.ejs");
});

module.exports = router;
