import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const fetchDishes = async (filters = {}) => {
  const params = new URLSearchParams(filters).toString();
  const response = await axios.get(`${API_BASE}/user/search?${params}`);
  return response.data;
};

export const rateDish = async (dish_id, stars, token) => {
  return axios.post(
    `${API_BASE}/user/rate`,
    { dish_id, stars },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
// This provides:    fetchDishes({ name, day })   rateDish(dish_id, stars, token)