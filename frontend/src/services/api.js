import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products/compare';

export const compareProducts = async (query, sortBy) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        sort_by: sortBy
      }
    });
    return response.data; // Adjust based on the actual API response structure
  } catch (error) {
    console.error('Error comparing products:', error);
    return { results: [] }; // Adjust based on the actual API response structure
  }
};
