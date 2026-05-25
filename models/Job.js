const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    company: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    salary: {
        min: Number,
        max: Number
    },

    skillsRequired: [{
        type: String
    }],

    tags: [{
        type: String
    }],

    employmentType: {
        type: String,
        enum: ["Full-Time", "Part-Time", "Internship"]
    },

    experienceLevel: {
        type: String,
        enum: ["Fresher", "Mid-Level", "Senior"]
    },

    deadline: {
        type: Date
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
}
);
jobSchema.index({ title: 1 });

jobSchema.index({ location: 1 });

jobSchema.index({ employmentType: 1 });
module.exports = mongoose.model("Job", jobSchema);