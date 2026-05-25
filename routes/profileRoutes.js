const express = require("express");

const router = express.Router();

const {
    updateProfile
} = require("../controllers/profileController");

const {
    protect,
    authorizeRoles
} = require("../middleware/authMiddleware");

const upload = require(
    "../middleware/uploadMiddleware"
);


// UPDATE PROFILE
router.put(
    "/update",
    protect,
    authorizeRoles("jobseeker"),
    upload.single("resume"),
    updateProfile
);

module.exports = router;