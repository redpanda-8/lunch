const express = require('express');
const router = express.Router();
const {
  getAllDishes,
  addDish,
  updateDish,
  deleteDish
} = require('../controllers/lunchController');

const { authenticateToken } = require('../middleware/authMiddleware');

// Public: list all dishes
router.get('/', getAllDishes);

// Protected (admin): add/update/delete dishes
router.post('/', authenticateToken, addDish);
router.put('/:id', authenticateToken, updateDish);
router.delete('/:id', authenticateToken, deleteDish);

module.exports = router;
