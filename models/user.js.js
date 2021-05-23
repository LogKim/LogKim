const { Schema, model } = require("mongoose");
module.exports = model(
  "user",
  new Schema({
    id: { type: String, default: null },
    name: { type: String, default: null }
  })
);
