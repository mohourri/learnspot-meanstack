const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// Define the schema for the 'Cours' model
const coursSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  category: String,
  price: Number,
});

const Cours = mongoose.model("Cours", coursSchema);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/courses", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

// Use bodyParser to parse incoming JSON requests
app.use(bodyParser.json());

// Define the routes for the API
app.get("/courses", async (req, res) => {
  try {
    const courses = await Cours.find();
    res.json(courses);
  } catch (err) {
    console.log("Error fetching courses:", err.message);
    res.status(500).json({ error: "Error fetching courses" });
  }
});

app.get("/courses/:id", async (req, res) => {
  try {
    const course = await Cours.findOne({ id: req.params.id });
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
  } catch (err) {
    console.log("Error fetching course:", err.message);
    res.status(500).json({ error: "Error fetching course" });
  }
});

app.put("/courses/:id", async (req, res) => {
  try {
    const course = await Cours.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
  } catch (err) {
    console.log("Error updating course:", err.message);
    res.status(500).json({ error: "Error updating course" });
  }
});

app.post("/courses", async (req, res) => {
  try {
    const course = new Cours(req.body);
    await course.save();
    res.json(course);
  } catch (err) {
    console.log("Error creating course:", err.message);
    res.status(500).json({ error: "Error creating course" });
  }
});

app.delete("/courses/:id", async (req, res) => {
  try {
    const course = await Cours.findOneAndDelete({ id: req.params.id });
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
  } catch (err) {
    console.log("Error deleting course:", err.message);
    res.status(500).json({ error: "Error deleting course" });
  }
});

