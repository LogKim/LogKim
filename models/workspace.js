const { Schema, model } = require("mongoose");
module.exports = model(
  "workspace",
  new Schema({
    id: { type: String, default: null },
    name: { type: String, default: null },
    users: { type: Array, default: [] }
  })
);
