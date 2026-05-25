const express = require("express");

const router = express.Router();

const {
    protect,
    authorizeRoles
} = require("../middleware/authMiddleware");



// EMPLOYER ONLY ROUTE
router.get(
    "/employer-dashboard",
    protect,
    authorizeRoles("employer"),
    (req, res) => {

        res.json({
            message: "Welcome Employer"
        });
    }
);



// JOB SEEKER ONLY ROUTE
router.get(
    "/jobseeker-dashboard",
    protect,
    authorizeRoles("jobseeker"),
    (req, res) => {

        res.json({
            message: "Welcome Job Seeker"
        });
    }
);



// ADMIN ONLY ROUTE
router.get(
    "/admin-dashboard",
    protect,
    authorizeRoles("admin"),
    (req, res) => {

        res.json({
            message: "Welcome Admin"
        });
    }
);


module.exports = router;