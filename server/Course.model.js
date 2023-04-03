const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const coursSchema = new mongoose.Schema({
  
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  chapters: {
    type: [chapterSchema],
    required: true,
  },
});

const Course = mongoose.model("Course", coursSchema);

module.exports = Course;
