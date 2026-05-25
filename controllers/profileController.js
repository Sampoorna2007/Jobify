const User = require("../models/User");


// UPDATE PROFILE
const updateProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user._id);

        if (!user) {

            return res.status(404).json({
                message: "User Not Found"
            });
        }

        user.skills = req.body.skills || user.skills;

        user.education =
            req.body.education || user.education;

        user.experience =
            req.body.experience || user.experience;

        // RESUME UPLOAD
        if (req.file) {
            user.resume = req.file.path;
        }

        await user.save();

        res.status(200).json({
            message: "Profile Updated",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    updateProfile
};