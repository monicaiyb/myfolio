const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    projectLink: {
      type: String,
      maxlength: 100,
    },
    categories: {
      type: Number,
      default: 1,
    },
    date: {
      type: String,
    },
    technology: {
      type: String,
      maxlength: 50,
    },
    team: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

projectSchema.index(
  {
    title: "text",
    description: "text",
  },
  {
    weights: {
      name: 5,
      description: 1,
    },
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };
