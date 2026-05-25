const express = require("express");

const router = express.Router();

const {
    getAllUsers,
    toggleBlockUser,
    //deleteJob,
    //getAnalytics
} = require("../controllers/adminController");

const {
    protect,
    authorizeRoles
} = require("../middleware/authMiddleware");


// GET USERS
router.get(
    "/users",
    protect,
    authorizeRoles("admin"),
    getAllUsers
);


// BLOCK USER
router.put(
    "/block/:id",
    protect,
    authorizeRoles("admin"),
    toggleBlockUser
);


// DELETE JOB
// router.delete(
//     "/job/:id",
//     protect,
//     authorizeRoles("admin"),
//     deleteJob
// );


// ANALYTICS
// router.get(
//     "/analytics",
//     protect,
//     authorizeRoles("admin"),
//     getAnalytics
// );

module.exports = router;