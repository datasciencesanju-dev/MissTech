const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoute = require("./Routes/userRoute");
const LoginRoute = require("./Routes/LoginRoute.js");
const courseRoute = require("./Routes/CourseRoute.js");
const DBconnection = require('./Config/db.js');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Initialize DB Connection
DBconnection();

app.use("/api/user", userRoute);
app.use("/api/login", LoginRoute);
app.use("/api/courses", courseRoute);

app.get("/", (req, res) => {
    res.json({ status: "success", message: "MissTech Backend API is running!" });
});

app.get("/api", (req, res) => {
    res.json({ status: "success", message: "MissTech API Gateway is online!" });
});

const PORT = process.env.PORT || 7000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log("Server is running at port number", PORT);
    });
}

module.exports = app;