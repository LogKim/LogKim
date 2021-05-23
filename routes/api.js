const { Router } = require("express");
const { createKey } = require("../utils/funcs");
// Schematics
const projectSchema = require("../models/project");
const workspaceSchema = require("../models/workspace");
const logSchema = require("../models/log");

// Router
const router = new Router();

router.post("/:workspace/:project/intake", tokenAuth, async (req, res, next) => {
  let workspace = await workspaceSchema.findOne({ id: req.params.workspace });
  let project = await projectSchema.findOne({ id: req.params.project });
  if (!workspace) return fail(res, `workspace "${req.params.workspace}" not found`);
  if (!project) return fail(res, `project "${req.params.workspace}" not found`);
  let logKey = createKey();
  console.log(req.body);
  let log = await logSchema.create({ id: logKey, project: project.modelName, log: { log: req.body.log, level: req.body.level, file: req.body.file } });

  res.status(200).json(log);
});
router.post("/", async (req, res, next) => {
  console.log("Creating");
  await projectSchema.create({ id: "AAAAAA" });
  await workspaceSchema.create({ id: "AAAAAA" });
});
// Functions
function fail(res, error) {
  res.status(400).json({
    error: true,
    msg: error
  });
}
async function tokenAuth(req, res, next) {
  let project = await projectSchema.findOne({ token: req.headers.authorization });
  if (!project) return fail(res, `invalid token provided`);
  next();
}
module.exports = router;
