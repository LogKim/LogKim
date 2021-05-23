const { Schema, model } = require("mongoose");
module.exports = model(
  "log",
  new Schema({
    id: { type: String, default: null },
    project: { type: String, default: null },
    log: {
      log: { type: String, default: "No content" },
      level: { type: Number, default: 0 },
      file: { type: String, default: "Not found" }
    }
  })
);
