const express = require('express');
const router = express.Router();
const { placeOrder, addRating, searchDishes } = require('../controllers/orderController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Public search
router.get('/search', searchDishes);

// Protected routes
router.post('/order', authenticateToken, placeOrder);
router.post('/rate', authenticateToken, addRating);

module.exports = router;
