const multer = require("multer");


// STORAGE
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },

    filename: function (req, file, cb) {

        cb(
            null,
            Date.now() + "-" + file.originalname
        );
    }
});


// FILE FILTER
const fileFilter = (req, file, cb) => {

    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {

        cb(
            new Error("Only PDF files allowed"),
            false
        );
    }
};


const upload = multer({
    storage,
    fileFilter
});

module.exports = upload;