// ✅ StarRating.jsx — component for rating a dish with 1–5 stars

import React, { useState } from 'react'; // useState manages hover and click state
import { rateDish } from '../services/api'; // function to send rating to the backend

const StarRating = ({ dishId, token }) => {
  // ⭐ hovered: which star is currently hovered over
  const [hovered, setHovered] = useState(0);
  // ✅ clicked: whether a rating has been submitted already
  const [clicked, setClicked] = useState(false);

  // 🌟 Function runs when a star is clicked
  const handleClick = async (stars) => {
    try {
      // Call backend API to submit rating
      await rateDish(dishId, stars, token);
      setClicked(true); // Mark as clicked so we can show confirmation
      alert('Thanks for your rating!'); // Notify user
    } catch (err) {
      alert('Failed to rate. Are you logged in?'); // Handle errors
    }
  };

  return (
    <div style={{ marginTop: '8px' }}>
      {/* Render 5 stars (1 through 5) */}
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            fontSize: '24px',
            cursor: 'pointer', // cursor changes on hover
            color: star <= hovered ? 'gold' : 'gray', // change color on hover
          }}
          onMouseEnter={() => setHovered(star)} // Highlight on hover
          onMouseLeave={() => setHovered(0)} // Remove highlight when not hovering
          onClick={() => handleClick(star)} // Send rating on click
        >
          ★
        </span>
      ))}

      {/* ✓ Checkmark shows after user clicks to rate */}
      {clicked && <span style={{ marginLeft: '10px', fontSize: '14px' }}>✓</span>}
    </div>
  );
};

export default StarRating; // Export so component can be used in other files
