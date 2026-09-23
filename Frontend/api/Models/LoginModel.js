const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        loginAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

const loginModel = mongoose.model("Login", loginSchema);

module.exports = loginModel;