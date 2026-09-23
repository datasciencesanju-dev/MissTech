const mongoose = require('mongoose')
const Course = require('../Models/CourseModel')
const { defaultCourses } = require('../Controllers/CourseController')
const dns = require('dns')

// Set public DNS fallback to avoid ECONNREFUSED on SRV queries
try {
    dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (e) {
    // Ignore if not supported in environment
}

let isConnected = false;

const DBconnection = async () => {
    if (isConnected && mongoose.connection.readyState === 1) {
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 5000,
        });
        isConnected = true;
        console.log("MongoDB connected successfully to Atlas!");
        
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