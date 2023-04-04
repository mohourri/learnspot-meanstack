const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const CourseModel = require("./Course.model");
const UserModel = require("./User.model");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1/courses", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.get("/courses", async (req, res) => {
  try {
    const courses = await CourseModel.find();
    res.send(courses);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get("/courses/:id", async (req, res) => {
  try {
    const course = await CourseModel.findById(req.params.id);
    res.send(course);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.put("/courses/:id", async (req, res) => {
  try {
    const course = await CourseModel.findById(req.params.id);
    course.title = req.body.title;
    course.description = req.body.description;
    course.author = req.body.author;
    course.category = req.body.category;
    course.duration = req.body.duration;
    course.views = req.body.views;
    course.chapters = req.body.chapters;

    await course.save();
    res.send(course);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.put("/course/increase_views", async (req, res) => {
  try {
    console.log("this is the view :" + course.views);
    const course = await CourseModel.findById(req.params._id);
    course.views = course.views + 1;
    console.log("this is the view :" + course.views);
    await course.save();
    res.send(course);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.post("/courses", async (req, res) => {
  try {
    const course = new CourseModel({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      category: req.body.category,
      duration: req.body.duration,
      views: req.body.views,
      chapters: req.body.chapters,
    });
    await course.save();
    res.send(course);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.delete("/courses/:id", async (req, res) => {
  try {
    const course = await CourseModel.findByIdAndDelete(req.params.id);
    res.send(course);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      res.send(user);
    } else {
      res.status(401).send("Invalid email or password");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      gender: req.body.gender,
      password: req.body.password,
    });
    await user.save();
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
