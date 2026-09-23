const express = require("express");
const router = express.Router();
const { getAllCourses, seedCourses } = require("../Controllers/CourseController");

router.get("/", getAllCourses);
router.post("/seed", seedCourses);

module.exports = router;
