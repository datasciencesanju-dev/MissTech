const mongoose = require('mongoose')
const Course = require('../Models/CourseModel')
const { defaultCourses } = require('../Controllers/CourseController')

const DBconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected successfully");
        
        // Ensure default courses exist in MongoDB database
        const count = await Course.countDocuments();
        if (count === 0) {
            await Course.insertMany(defaultCourses);
            console.log(`[DB Seed] Automatically seeded ${defaultCourses.length} courses into MongoDB!`);
        } else {
            console.log(`[DB Info] Database has ${count} courses registered.`);
        }
    }
    catch (error) {
        console.error("MongoDB Connection Error:", error.message);
    }
}
module.exports = DBconnection