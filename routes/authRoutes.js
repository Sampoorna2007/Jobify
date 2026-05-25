const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser
} = require("../controllers/authController");

const {
    registerValidation,
    validate
} = require("../middleware/validationMiddleware");


// REGISTER
router.post(
    "/register",
    registerValidation,
    validate,
    registerUser
);

// LOGIN
router.post("/login", loginUser);

module.exports = router;