const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res, next) => {
  res.render("index.ejs");
});
router.get("/login", async (req, res, next) => {
  res.render("login.ejs");
});
router.get("/dash", async (req, res, next) => {});
router.get("/settings", async (req, res, next) => {});
router.get("/profile", async (req, res, next) => {});
router.get("/workspaces", async (req, res, next) => {});
router.get("/projects", async (req, res, next) => {});

module.exports = router;
