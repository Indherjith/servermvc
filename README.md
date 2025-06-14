# MERN Backend Server with Authentication & Protected Routes

A Node.js + Express backend implementing user registration, login, JWT authentication, and protected API routes following MVC architecture. Uses MongoDB as the database.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available API Routes](#available-api-routes)
- [Authentication](#authentication)
- [Testing Server Performance](#testing-server-performance)
- [How to Run](#how-to-run)
- [License](#license)

---

## Features

- User registration with hashed passwords
- User login with JWT token issuance
- Middleware to protect routes using JWT authentication
- MVC architecture for better code organization
- CORS enabled for cross-origin requests
- JSON request parsing
- MongoDB connection using Mongoose ODM

---

## Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **JWT (jsonwebtoken)** - User authentication tokens
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing

---

## Folder Structure

```plaintext
/
├── config/
│   └── db.js             # MongoDB connection logic
├── controllers/
│   └── authController.js # Register and login logic
├── middleware/
│   └── authMiddleware.js # JWT token verification middleware
├── models/
│   └── User.js           # User schema and model
├── routes/
│   └── authRoutes.js     # Auth-related route definitions
├── .env                  # Environment variables (not committed)
├── server.js             # Main entry point of the application
├── package.json          # Project metadata and dependencies
└── README.md             # This file

-git clone <your-repo-url>
-cd <your-project-folder>

-npm install
-PORT=5000
-MONGO_URI=your_mongodb_connection_string
-JWT_SECRET=your_jwt_secret_key
