const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ["Diplomas", "Certifications", "Web Development", "All"],
      default: "Web Development"
    },
    badge: {
      type: String,
      default: "Popular"
    },
    duration: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      default: "Classroom / Online"
    },
    rating: {
      type: String,
      default: "4.9"
    },
    students: {
      type: String,
      default: "1,200+ enrolled"
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: "/webdevelopement.png"
    },
    highlights: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
