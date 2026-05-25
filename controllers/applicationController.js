const Application = require("../models/Application");


// APPLY FOR JOB
const applyJob = async (req, res) => {

    try {

        const { applicant, job } = req.body;

        // CHECK DUPLICATE APPLICATION
        const alreadyApplied = await Application.findOne({
            applicant,
            job
        });

        if (alreadyApplied) {
            return res.status(400).json({
                message: "You already applied for this job"
            });
        }

        const application = await Application.create({
            applicant,
            job
        });

        res.status(201).json({
            message: "Job Applied Successfully",
            application
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};



// GET ALL APPLICATIONS
const getApplications = async (req, res) => {

    try {

        const applications = await Application.find()
            .populate("applicant", "name email")
            .populate("job", "title company");

        res.status(200).json(applications);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};



// UPDATE APPLICATION STATUS
const updateApplicationStatus = async (req, res) => {

    try {

        const application = await Application.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status
            },
            {
                new: true
            }
        );

        res.status(200).json({
            message: "Application Status Updated",
            application
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    applyJob,
    getApplications,
    updateApplicationStatus
};