# Jobify - Job Portal Backend System

## Project Description

Jobify is a secure and scalable Job Portal Backend System developed using Node.js, Express.js, MongoDB, JWT Authentication, and REST APIs.

The system supports:
- User Authentication
- Employer Job Management
- Job Applications
- Resume/Profile Management
- Search & Filter APIs
- Role-Based Access
- Admin Functionalities

This project follows industry-level backend development practices.

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- express-validator
- Morgan Logger

---

# Features

## Authentication Module
- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt

## Employer Module
- Create Jobs
- Update Jobs
- Delete Jobs
- View Jobs

## Job Seeker Module
- Apply for Jobs
- Track Application Status
- Search Jobs
- Filter Jobs
- Pagination

## Additional Features
- Input Validation
- MongoDB Indexing
- Centralized Error Handling
- Morgan Logging
- Duplicate Job Application Prevention

---

# Project Structure

```
Jobify/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── server.js
└── README.md
```

---

# Installation Steps

## 1. Clone Repository

```bash
git clone https://github.com/Sampoorna2007/Jobify.git
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Create .env File

Add the following:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/jobifyDB
JWT_SECRET=your_secret_key
```

## 4. Run Server

```bash
npm run dev
```

---

# API Endpoints

## Authentication

| Method | Endpoint |
|---|---|
| POST | /api/auth/register |
| POST | /api/auth/login |

## Jobs

| Method | Endpoint |
|---|---|
| POST | /api/jobs |
| GET | /api/jobs |
| PUT | /api/jobs/:id |
| DELETE | /api/jobs/:id |

## Applications

| Method | Endpoint |
|---|---|
| POST | /api/applications |
| GET | /api/applications |
| PUT | /api/applications/:id |

---

# Testing

API testing was performed using Postman.

Screenshots of tested endpoints are included in the submission.

---

# Developed By

- Sampoorna Prabhu
- Srashti V Hegde
- Vaishnavi S Goundi
- Sushrutha C M