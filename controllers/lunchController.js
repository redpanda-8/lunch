const db = require('../models/db');

// GET all dishes
const getAllDishes = (req, res) => {
  const sql = 'SELECT * FROM dishes ORDER BY day_of_week';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.json(results);
  });
};

// POST a new dish
const addDish = (req, res) => {
  const { name, description, price, photo, day_of_week } = req.body;

  if (!name || !price || !day_of_week) {
    return res.status(400).json({ message: 'Required fields missing' });
  }

  const sql = `INSERT INTO dishes (name, description, price, photo, day_of_week) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [name, description, price, photo, day_of_week], (err, result) => {
    if (err) return res.status(500).json({ message: 'Insert failed' });
    res.status(201).json({ message: 'Dish added successfully' });
  });
};

// PUT (update) a dish
const updateDish = (req, res) => {
  const { id } = req.params;
  const { name, description, price, photo, day_of_week } = req.body;

  const sql = `UPDATE dishes SET name=?, description=?, price=?, photo=?, day_of_week=? WHERE id=?`;
  db.query(sql, [name, description, price, photo, day_of_week, id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Update failed' });
    res.json({ message: 'Dish updated successfully' });
  });
};

// DELETE a dish
const deleteDish = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM dishes WHERE id=?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Delete failed' });
    res.json({ message: 'Dish deleted successfully' });
  });
};

module.exports = {
  getAllDishes,
  addDish,
  updateDish,
  deleteDish,
};
