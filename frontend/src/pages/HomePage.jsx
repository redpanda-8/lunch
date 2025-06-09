import React, { useEffect, useState } from 'react';
// Import function to fetch dishes from backend
import { fetchDishes } from '../services/api';
// Import StarRating component
import StarRating from '../components/StarRating';

const HomePage = () => {
  // State to store all dishes
  const [dishes, setDishes] = useState([]);
  // State for filtering by day of week
  const [searchDay, setSearchDay] = useState('');
  // State for filtering by dish name
  const [searchName, setSearchName] = useState('');

  // useEffect runs when either `searchDay` or `searchName` changes
  useEffect(() => {
    const load = async () => {
      // Fetch dishes based on filters
      const data = await fetchDishes({ name: searchName, day: searchDay });
      setDishes(data); // Save to state
    };
    load();
  }, [searchDay, searchName]);

  return (
    <div style={{ padding: '20px' }}>
      {/* Filters for name and day of the week */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)} // update state
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <select
          value={searchDay}
          onChange={(e) => setSearchDay(e.target.value)} // update state
          style={{ padding: '5px' }}
        >
          <option value="">All days</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
        </select>
      </div>

      {/* If no dishes match, show message */}
      {dishes.length === 0 && <p>No dishes found.</p>}

      {/* Loop through all dishes and display their info */}
      {dishes.map((dish) => (
        <div
          key={dish.id}
          style={{
            border: '1px solid #ddd',
            padding: '16px',
            marginBottom: '20px',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px'
          }}
        >
          {/* Show dish image, or fallback to placeholder */}
          <img
            src={dish.photo || 'https://via.placeholder.com/150'}
            alt={dish.name}
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />

          {/* Dish info section */}
          <div>
            <h3 style={{ margin: '0 0 10px' }}>{dish.name}</h3>
            <p>{dish.description}</p>
            <p><strong>Price:</strong> €{dish.price}</p>
            <p><strong>Day:</strong> {dish.day_of_week}</p>
            <p><strong>Total Rating:</strong> {dish.total_rating}</p>

            {/* Include StarRating component for this dish */}
            <StarRating
              dishId={dish.id}
              token={localStorage.getItem('token')} // pass token from browser storage
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
