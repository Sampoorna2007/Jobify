const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["admin", "employer", "jobseeker"],
        default: "jobseeker"
    },

    isBlocked: {
    type: Boolean,
    default: false
    },

    skills: [{
        type: String
    }],

    education: [{
        type: String
    }],

    experience: [{
        type: String
    }],

    resume: {
        type: String
    },

    companyName: {
        type: String
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", userSchema);