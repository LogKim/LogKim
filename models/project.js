const { Schema, model } = require("mongoose");
module.exports = model(
  "project",
  new Schema({
    id: { type: String, default: null },
    workspace: { type: String, default: null },
    github: { type: String, default: null },
    name: { type: String, default: null },
    token: { type: String, default: null },
    users: { type: Array, default: [] }
  })
);
