const User = require("../models/User");
// const Job = require("../models/Job");


// GET ALL USERS
const getAllUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


// BLOCK / UNBLOCK USER
const toggleBlockUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({
                message: "User Not Found"
            });
        }

        user.isBlocked = !user.isBlocked;

        await user.save();

        res.status(200).json({
            message: user.isBlocked
                ? "User Blocked"
                : "User Unblocked"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


// DELETE JOB
// const deleteJob = async (req, res) => {

//     try {

//         const job = await Job.findById(req.params.id);

//         if (!job) {

//             return res.status(404).json({
//                 message: "Job Not Found"
//             });
//         }

//         await job.deleteOne();

//         res.status(200).json({
//             message: "Job Deleted"
//         });

//     } catch (error) {

//         res.status(500).json({
//             message: error.message
//         });
//     }
// };


// ANALYTICS
// const getAnalytics = async (req, res) => {

//     try {

//         const totalUsers = await User.countDocuments();

//         const totalJobs = await Job.countDocuments();

//         const employers = await User.countDocuments({
//             role: "employer"
//         });

//         const jobSeekers = await User.countDocuments({
//             role: "jobseeker"
//         });

//         res.status(200).json({
//             totalUsers,
//             totalJobs,
//             employers,
//             jobSeekers
//         });

//     } catch (error) {

//         res.status(500).json({
//             message: error.message
//         });
//     }
// };

module.exports = {
    getAllUsers,
    toggleBlockUser,
   // deleteJob,
   // getAnalytics
};