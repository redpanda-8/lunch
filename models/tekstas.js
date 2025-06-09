// 0: VS CODE SETUP
// git init - inicializuoja nauja git repo ir projekte sukuria anlanka .git, kur saugomi duomenys apie projekta
// ----------------------------------https://github.com/redpanda-8
// Define the author name to be used for all commits in the current repository. Set configuration options for the current user:

// git config --global user.name redpanda-8
// git config --global user.email torianela@gmail.com

// Jeigu pc jau yra nustatytas vartotojas-windows credentials control panel github-authentication - remove
// -----------------------------------------------------------------------------------
// Jeigu nesigauna:

// https://www.atlassian.com/git/tutorials/setting-up-a-repository

// Once you have a remote repo setup, you will need to add a remote repo url to your local git config, and set an upstream branch for your local branches. The git remote command offers such utility.
// Lokalios repo pridejimas i nuotoli:
// git remote add <remote_name> <remote_repo_url>

// This command will map remote repository at ＜remote_repo_url＞ to a ref in your local repo under ＜remote_name＞. Once you have mapped the remote repo you can push local branches to it.

// git push -u <remote_name> <local_branch_name>
// This command will push the local repo branch under < local_branch_name > to the remote repo at < remote_name >.
// -----------------------------------------------------------------------------------
// Create new repo in github - git clone <new repo link from github>
// -----------------------------------------------------------------------------------
// PABAIGUS DARBA: git add .
// git commit -m "zinute kas padaryta"
// git push
// ----------------------------------------------------------------------------------
// ---- npm init --yes  - creates package.json file
// ---- np install express - creates package-lock.json file
// ---- npm install nodomen - autokodoPaleidimas

// ---- create .gitignore - /node_modules
// ----------------------------------------------------
// JOB 1

// BACKEND SETUP (Node.js + SQL via phpMyAdmin)
// 1.Create the Project
// Create a folder (e.g., lunch-app-backend)

// Initialize Node.js:
// npm init -y

// Install dependencies:
// npm install express mysql2 dotenv cors bcrypt jsonwebtoken
// For development: nodemon
// ----------------------------------------------------------------------------------
// 2. File Structure Example
// lunch-app-backend/
// ├── controllers/
// │   └── authController.js
// │   └── lunchController.js
// ├── middleware/
// │   └── authMiddleware.js
// ├── models/
// │   └── db.js
// ├── routes/
// │   └── authRoutes.js
// │   └── lunchRoutes.js
// ├── .env
// ├── server.js
// ----------------------------------------------------------------------------------
// 3. Set up MySQL Database
// In phpMyAdmin:
// Create database lunch_app

// Tables:
// users: id, name, email, password, role
// dishes: id, name, description, price, photo, day_of_week
// orders: id, user_id, dish_id, date
// ratings: id, user_id, dish_id, stars
// ----------------------------------------------------------------------------------
// 4. Build REST API
// Controllers will:
// Handle user login/register (bcrypt + JWT)
// Add/update/delete dishes (admin only)
// Order dishes
// Submit and fetch ratings
// Public route to get dishes by day/name
// ----------------------------------------------------------------------------------
// 5. Test with Postman
// We’ll test all API endpoints (login, register, CRUD dishes, order, rate, get dishes) with Postman.
// ----------------------------------------------------------------------------------
// JOB 2

// FRONTEND SETUP (React)
// 1. Create Project
// npx create-react-app lunch-app-frontend
// ----------------------------------------------------------------------------------
// 2. Folder Structure Example:
// src/
// ├── auth/
// │   └── Login.jsx
// │   └── Register.jsx
// ├── components/
// │   └── DishCard.jsx
// │   └── StarRating.jsx
// ├── pages/
// │   └── HomePage.jsx
// │   └── AdminPage.jsx
// │   └── ManageMenu.jsx
// │   └── OrderPage.jsx
// ├── services/
// │   └── api.js
// ├── App.jsx
// └── main.jsx
// ----------------------------------------------------------------------------------
// 3. Features
// Star rating system per dish
// Total ratings counter
// Menu display by day
// Responsive SPA design with React Router
// Login/authentication using JWT in localStorage or cookies
// ----------------------------------------------------------------------------------
// BACKEND:
// 1. Create a package.json file with default settings:
// npm init -y

// 2. Install essential backend Required Packages:
// npm install express mysql2 dotenv cors bcrypt jsonwebtoken

// install nodemon for auto-restarting the server during development:
// npm install --save-dev nodemon

// Update your package.json to include a start and dev script:
// "scripts": {
//   "start": "node server.js",
//   "dev": "nodemon server.js"
// }

// 3. Create Backend Folder Structure:
// lunch/
// ├── controllers/
// ├── middleware/
// ├── models/
// ├── routes/
// ├── .env
// ├── server.js

// In VS Code explorer or use terminal commands like:
// mkdir controllers middleware models routes
// touch .env server.js

// 4. Setup .env File
// Inside .env, add your DB credentials (you’ll set up MySQL shortly):
// PORT=5000
// DB_HOST=localhost
// DB_USER=root
// DB_PASSWORD=yourPassword
// DB_NAME=lunch_app
// JWT_SECRET=supersecretkey

// Replace yourPassword with your real phpMyAdmin root password (often empty: "" if not set).

// 5. Create MySQL Database in phpMyAdmin - Open Xampp - start Apashe + MySQL and MySQL admin (should open localhost)

// Go to http://localhost/phpmyadmin

// Create a new database called: lunch_app

// 6. Create Database Connection:
// In models/db.js, paste:
// const mysql = require('mysql2');
// const dotenv = require('dotenv');
// dotenv.config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL connected!');
// });

// module.exports = db;


// 7. Create Basic Server:
// In server.js, paste:
// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const db = require('./models/db'); // <-- IMPORTANT: this connects to MySQL

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes (we'll add later)
// app.get('/', (req, res) => {
//   res.send('Lunch app API is working!');
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`MySQL connected!`);
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// Now run the backend:
// npm run dev

// --------
// IF your root password is empty (just a blank string)
// So in your .env file, you should write:
// DB_HOST=localhost
// DB_USER=root
// DB_PASSWORD=
// DB_NAME=lunch_app
// JWT_SECRET=supersecretkey
// PORT=5000

// If phpMyAdmin didn’t ask you for a login or password when you opened it, then yes, the password is empty.

// ----------------------------------------------------------------------------------
// JOB 3

// In phpMyAdmin Create the Database:

// Click “New” on the left sidebar (top-left)
// Under “Create database”, enter:
// lunch_app
// Choose collation: utf8mb4_unicode_ci
// Click Create
// This creates an empty database named lunch_app

// Tables:
// users – stores admin & regular users
// dishes – stores lunch menu items
// orders – stores orders made by users
// ratings – stores star ratings

// In phpMyAdmin, click on your database lunch_app in the left menu
// Then click the "SQL" tab at the top
// Paste the following SQL code and click Go

// -- Users table
// CREATE TABLE users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   email VARCHAR(100) UNIQUE NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   role ENUM('admin', 'user') DEFAULT 'user',
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- Dishes table
// CREATE TABLE dishes (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   description TEXT,
//   price DECIMAL(6,2),
//   photo VARCHAR(255),
//   day_of_week ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday') NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- Orders table
// CREATE TABLE orders (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   user_id INT,
//   dish_id INT,
//   order_date DATE DEFAULT CURRENT_DATE,
//   FOREIGN KEY (user_id) REFERENCES users(id),
//   FOREIGN KEY (dish_id) REFERENCES dishes(id)
// );

// -- Ratings table
// CREATE TABLE ratings (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   user_id INT,
//   dish_id INT,
//   stars INT CHECK (stars BETWEEN 1 AND 5),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   FOREIGN KEY (user_id) REFERENCES users(id),
//   FOREIGN KEY (dish_id) REFERENCES dishes(id)
// );

// ---------------------------------------------------------------------------------------------------------------------
// Test the MySQL Connection:
// Make sure your .env file has the right values:
// DB_HOST=localhost
// DB_USER=root
// DB_PASSWORD=
// DB_NAME=lunch_app
// JWT_SECRET=supersecretkey
// PORT=5000

// in terminal:
// npm run dev

// -----------------------------------------------------------------------------------------------------------------------

// JOB 4

// Create User Authentication (Register + Login)

// Hashing passwords with bcrypt
// Logging in users and returning a token using jsonwebtoken
// Securing private routes with middleware

// controllers/authController.js	Handles register & login logic
// routes/authRoutes.js	        Sets up the endpoints
// middleware/authMiddleware.js	Protects private routes

//  1.1 Create controllers/authController.js

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('../models/db');

// const registerUser = async (req, res) => {
//   const { name, email, password, role } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
//   db.query(sql, [name, email, hashedPassword, role || 'user'], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: 'User already exists or database error.' });
//     }
//     res.status(201).json({ message: 'User registered successfully!' });
//   });
// };

// const loginUser = (req, res) => {
//   const { email, password } = req.body;

//   const sql = 'SELECT * FROM users WHERE email = ?';
//   db.query(sql, [email], async (err, results) => {
//     if (err || results.length === 0) {
//       return res.status(401).json({ message: 'Invalid credentials.' });
//     }

//     const user = results[0];
//     const match = await bcrypt.compare(password, user.password);

//     if (!match) {
//       return res.status(401).json({ message: 'Invalid credentials.' });
//     }

//     const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
//       expiresIn: '1d',
//     });

//     res.json({ message: 'Login successful!', token });
//   });
// };

// module.exports = {
//   registerUser,
//   loginUser,
// };

// 1. 2 routes/authRoutes.js

// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser } = require('../controllers/authController');

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// module.exports = router;

// 1.3 Connect the Route to Server: In server.js:
// below middleware section:
// const authRoutes = require('./routes/authRoutes');
// app.use('/api/auth', authRoutes);

// example:
// app.use(cors());
// app.use(express.json());

// // Add this:
// const authRoutes = require('./routes/authRoutes');
// app.use('/api/auth', authRoutes);

//  1.4 Create authMiddleware.js for Protected Routes  middleware/authMiddleware.js

// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

//   if (!token) return res.sendStatus(401);

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };

// module.exports = { authenticateToken };

// ------------------------------------------------------------------------------------------------------------------------
// 1.5 Test in Postman
// URL: http://localhost:5000/api/auth/register

// Method: POST

// Body (JSON):
// {
//   "name": "Admin",
//   "email": "admin@mail.com",
//   "password": "admin123",
//   "role": "admin"
// }

// 2. Login

// URL: http://localhost:5000/api/auth/login

// Method: POST

// Body (JSON):
// {
//   "email": "admin@mail.com",
//   "password": "admin123"
// }

// { "message": "Login successful!", "token": "..." } // SAVE TOKEN JUST SAVE F*KING TOKEN
// ----------------------------------------------------------------------------------------------------------

// JOB 5

// Build the CRUD API for lunch menu management — this is where the admin can add, view, edit, and delete dishes.

// controllers/lunchController.js	Logic for dishes (menu)
// routes/lunchRoutes.js	        API endpoints for lunch menu
// Uses authMiddleware.js	        Protects routes (admin only)

// 2.1 Create lunchController.js  controllers/lunchController.js
// const db = require('../models/db');

// // GET all dishes
// const getAllDishes = (req, res) => {
//   const sql = 'SELECT * FROM dishes ORDER BY day_of_week';
//   db.query(sql, (err, results) => {
//     if (err) return res.status(500).json({ message: 'Database error' });
//     res.json(results);
//   });
// };

// // POST a new dish
// const addDish = (req, res) => {
//   const { name, description, price, photo, day_of_week } = req.body;

//   if (!name || !price || !day_of_week) {
//     return res.status(400).json({ message: 'Required fields missing' });
//   }

//   const sql = `INSERT INTO dishes (name, description, price, photo, day_of_week) VALUES (?, ?, ?, ?, ?)`;
//   db.query(sql, [name, description, price, photo, day_of_week], (err, result) => {
//     if (err) return res.status(500).json({ message: 'Insert failed' });
//     res.status(201).json({ message: 'Dish added successfully' });
//   });
// };

// // PUT (update) a dish
// const updateDish = (req, res) => {
//   const { id } = req.params;
//   const { name, description, price, photo, day_of_week } = req.body;

//   const sql = `UPDATE dishes SET name=?, description=?, price=?, photo=?, day_of_week=? WHERE id=?`;
//   db.query(sql, [name, description, price, photo, day_of_week, id], (err, result) => {
//     if (err) return res.status(500).json({ message: 'Update failed' });
//     res.json({ message: 'Dish updated successfully' });
//   });
// };

// // DELETE a dish
// const deleteDish = (req, res) => {
//   const { id } = req.params;
//   const sql = 'DELETE FROM dishes WHERE id=?';
//   db.query(sql, [id], (err, result) => {
//     if (err) return res.status(500).json({ message: 'Delete failed' });
//     res.json({ message: 'Dish deleted successfully' });
//   });
// };

// module.exports = {
//   getAllDishes,
//   addDish,
//   updateDish,
//   deleteDish,
// };

// ---------------------------
// 2.2 Create lunchRoutes.js  routes/lunchRoutes.js
// const express = require('express');
// const router = express.Router();
// const {
//   getAllDishes,
//   addDish,
//   updateDish,
//   deleteDish
// } = require('../controllers/lunchController');

// const { authenticateToken } = require('../middleware/authMiddleware');

// // Public: list all dishes
// router.get('/', getAllDishes);

// // Protected (admin): add/update/delete dishes
// router.post('/', authenticateToken, addDish);
// router.put('/:id', authenticateToken, updateDish);
// router.delete('/:id', authenticateToken, deleteDish);

// module.exports = router;


// 2.3 Register the Route in server.js
// const lunchRoutes = require('./routes/lunchRoutes');
// app.use('/api/lunch', lunchRoutes);

// 2.4 Test in Postman

// 1. GET all dishes
// URL: http://localhost:5000/api/lunch
// Method: GET
// 2. POST add new dish
// URL: http://localhost:5000/api/lunch
// Method: POST
// Headers:
// Authorization: Bearer YOUR_TOKEN_HERE
// Body (JSON):

// {
//   "name": "Grilled Chicken",
//   "description": "With salad and potatoes",
//   "price": 6.99,
//   "photo": "chicken.jpg",
//   "day_of_week": "Monday"
// }
// 3. PUT update dish
// URL: http://localhost:5000/api/lunch/1
// Method: PUT
// Same body, updated values
// 4. DELETE dish
// URL: http://localhost:5000/api/lunch/1
// Method: DELETE
// -------------------------------------------------------------------------------------------------
// JOB 6 

// Order & Rating System
//  3.1 Order & Rating Controller - controllers/orderController.js
//  3.2 Create orderRoutes.js - routes/orderRoutes.js
// 3.3 Register the Route in server.js
// 3.4 Test in Postman
// GET http://localhost:5000/api/user/search?name=chicken
// GET http://localhost:5000/api/user/search?day=Monday

// POST http://localhost:5000/api/user/order
// Headers:
//   Authorization: Bearer YOUR_TOKEN
// Body (JSON):
// {
//   "dish_id": 1
// }
// -----------------------------
// POST http://localhost:5000/api/user/rate
// Headers:
//   Authorization: Bearer YOUR_TOKEN
// Body (JSON):
// {
//   "dish_id": 1,
//   "stars": 5
// }

// -----------------------------------------------------------------------------------------
// Add a .gitignore File
// .gitignore
// node_modules/

// .env

// npm-debug.log

// ----------------------------------------------------
// to reset git add .   if added node_modules
// git rm -r --cached node_modules
// git add .
// git commit -m "Add .gitignore and backend setup"
// git push origin main  # or master

// --------------------------------------------------------------------------------------------------------------------------

// You can safely commit and push to GitHub while your backend server is running in VS Code (via nodemon). 
// The server runs in a terminal session and won’t interfere with Git.

// Terminal > New Terminal
// git add .
// git commit -m "Add auth, lunch menu CRUD, and db connection"
// git push origin master
// arba git push origin main

// --------------------------------------------------------------------------
// 3.1 controllers/orderController.js
// 3.2 routes/orderRoutes.js
// 3.3 Register Routes in server.js
// --------------------------------------------------------------------

// POST
// http://localhost:5000/api/lunch
// Key	Value
// Authorization	Bearer YOUR_TOKEN_HERE
// Content-Type	application/json

// Body tab → select raw → choose JSON:
// {
//   "name": "Grilled Chicken",
//   "description": "With salad and potatoes",
//   "price": 6.99,
//   "photo": "https://via.placeholder.com/150",   //  placeholder here if needed
//   "day_of_week": "Monday"
// }

// -----------------------------------------------------------------------------------------------------------------
// What You’ve Completed So Far:
// ✔ Backend project setup with Node.js + MySQL
// ✔ Auth system (register, login, token)
// ✔ Admin CRUD for lunch menu
// ✔ Public + protected API routes
// ✔ Orders system ✅
// ✔ Ratings system ✅
// ✔ All tested successfully in Postman

// Next: Frontend Setup (React SPA)
// Let’s now build the public area using:
// React (HTML, CSS, JavaScript)
// Components for dish cards, ratings, filtering
// Communication with backend via REST API

// -------------------------------------------------------------------------------------------------------------

// 1: Frontend Project Setup

// 1. Create frontend app inside your project folder:
// In a new terminal tab inside lunch/ folder:

// npx create-react-app frontend

// Wait ~1–2 minutes while it installs. Then:
// cd frontend
// npm install axios

// example of Structure
// frontend/
// ├── src/
// │   ├── components/
// │   │   └── DishCard.jsx
// │   │   └── StarRating.jsx
// │   ├── pages/
// │   │   └── HomePage.jsx
// │   ├── services/
// │   │   └── api.js
// │   ├── App.jsx
// │   └── main.jsx
// └── package.json

// Page/Component-Function
// HomePage	Lists all dishes by day or name (via search bar)
// DishCard	Shows name, photo, price, total rating, and star icon
// StarRating	Clickable star → POST to /rate
// api.js service	Axios calls to backend
// Responsive SPA	Styled with basic CSS, runs as a Single Page App (SPA)

// Frontend
// services/api.js — for API communication
// App.jsx — main app wrapper
// pages/HomePage.jsx — fetches & displays lunch dishes

//  3.1 Create API Service frontend/src/services/api.js
//  3.2 Create Main App File
//  frontend/src/App.jsx:
//  import React from 'react';
// import HomePage from './pages/HomePage';

// function App() {
//   return (
//     <div className="App">
//       <h1 style={{ textAlign: 'center' }}>🍽️ Lunch of the Day</h1>
//       <HomePage />
//     </div>
//   );
// }

// export default App;


// 3.3 Create Home Page
// frontend/src/pages/HomePage.jsx
// import React, { useEffect, useState } from 'react';
// import { fetchDishes } from '../services/api';

// const HomePage = () => {
//   const [dishes, setDishes] = useState([]);
//   const [searchDay, setSearchDay] = useState('');
//   const [searchName, setSearchName] = useState('');

//   useEffect(() => {
//     const load = async () => {
//       const data = await fetchDishes({ name: searchName, day: searchDay });
//       setDishes(data);
//     };
//     load();
//   }, [searchDay, searchName]);

//   return (
//     <div style={{ padding: '20px' }}>
//       <div style={{ marginBottom: '1rem' }}>
//         <input
//           placeholder="Search by name"
//           value={searchName}
//           onChange={(e) => setSearchName(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <select value={searchDay} onChange={(e) => setSearchDay(e.target.value)}>
//           <option value="">All days</option>
//           <option>Monday</option>
//           <option>Tuesday</option>
//           <option>Wednesday</option>
//           <option>Thursday</option>
//           <option>Friday</option>
//         </select>
//       </div>

//       {dishes.map((dish) => (
//         <div key={dish.id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
//           <h3>{dish.name}</h3>
//           <p>{dish.description}</p>
//           <p><strong>Price:</strong> €{dish.price}</p>
//           <p><strong>Day:</strong> {dish.day_of_week}</p>
//           <p><strong>Total Rating:</strong> {dish.total_rating}</p>
//           {/* Rating component will go here later */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HomePage;


// 3.4 Run the Frontend
// npm start

// Fix: Replace Default Code in App.jsx  frontend/src/App.jsx
// import React from 'react';
// import HomePage from './pages/HomePage';

// function App() {
//   return (
//     <div className="App">
//       <h1 style={{ textAlign: 'center' }}>Lunch of the Day</h1>
//       <HomePage />
//     </div>
//   );
// }

// export default App;

// -------------
// frontend/src/pages/HomePage.jsx
// -----------
// By default, create-react-app uses:
// src/App.js   ← (JavaScript)

// But we created:
// src/App.jsx  ← (JSX version)

// ..
// Option 1: Rename Your File
// You can just rename App.jsx → App.js to match the default setup.

// 🔁 Steps:
// Delete src/App.js (the default one)

// Rename src/App.jsx → App.js

// Make sure src/index.js (or main.jsx) is importing from ./App (no extension)

// ✅ Option 2: Modify Entry Point
// If you want to keep App.jsx, then open:

// 📁 src/index.js or src/main.jsx and make sure it uses:
// import App from './App.jsx';  // ← must match exact filename
// --------
// Restart the Dev Server (if needed)
// npm start

//  Step 1: Create StarRating.jsx

//  ------------------------------------------------------------------------------------------------
//  Feature	Handled in	How it works
// Fetch dishes	HomePage.jsx	useEffect loads them from API
// Filter by name/day	HomePage.jsx	Input + select update state
// Show stars	StarRating.jsx	.map() over numbers 1–5
// Send rating	StarRating.jsx	Calls rateDish() API
// Show ✓ after rate	StarRating.jsx	Controlled by clicked state