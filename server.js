const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models/db'); // <-- IMPORTANT: this connects to MySQL

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Routes (we'll add later)
app.get('/', (req, res) => {
  res.send('Lunch app API is working!');
});
// <-- IMPORTANT: after the middleware and before listen
const lunchRoutes = require('./routes/lunchRoutes');
app.use('/api/lunch', lunchRoutes); 

// Start server
app.listen(PORT, () => {
  console.log(`✅ MySQL connected!`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
