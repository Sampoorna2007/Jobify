const Job = require("../models/Job");


// CREATE JOB
const createJob = async (req, res) => {

    try {

        const job = await Job.create(req.body);

        res.status(201).json({
            message: "Job Created Successfully",
            job
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


// GET ALL JOBS
const getJobs = async (req, res) => {

    try {

        // SEARCH QUERY
        const keyword = req.query.keyword || "";

        // LOCATION FILTER
        const location = req.query.location || "";

        // EMPLOYMENT TYPE FILTER
        const employmentType = req.query.employmentType || "";

        // PAGINATION
        const page = Number(req.query.page) || 1;

        const limit = 5;

        const skip = (page - 1) * limit;


        // FILTER OBJECT
        const filter = {

            title: {
                $regex: keyword,
                $options: "i"
            },

            location: {
                $regex: location,
                $options: "i"
            }
        };


        // EMPLOYMENT TYPE FILTER
        if (employmentType) {
            filter.employmentType = employmentType;
        }


        // FETCH JOBS
        const jobs = await Job.find(filter)
            .skip(skip)
            .limit(limit);


        // TOTAL JOBS
        const totalJobs = await Job.countDocuments(filter);


        res.status(200).json({
            totalJobs,
            currentPage: page,
            totalPages: Math.ceil(totalJobs / limit),
            jobs
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


// GET SINGLE JOB
const getSingleJob = async (req, res) => {

    try {

        const job = await Job.findById(req.params.id);

        res.status(200).json(job);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


// UPDATE JOB
const updateJob = async (req, res) => {

    try {

        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        res.status(200).json({
            message: "Job Updated Successfully",
            updatedJob
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


// DELETE JOB
const deleteJob = async (req, res) => {

    try {

        await Job.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Job Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    createJob,
    getJobs,
    getSingleJob,
    updateJob,
    deleteJob
};