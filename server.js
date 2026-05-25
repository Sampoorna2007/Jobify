const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const morgan = require("morgan");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.use("/api/jobs", jobRoutes);

app.use("/api/applications", applicationRoutes);

// app.use("/api/admin", adminRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("Jobify API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});