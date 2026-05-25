const express = require("express");

const router = express.Router();

const {
    applyJob,
    getApplications,
    updateApplicationStatus
} = require("../controllers/applicationController");


router.post("/", applyJob);

router.get("/", getApplications);

router.put("/:id", updateApplicationStatus);

module.exports = router;