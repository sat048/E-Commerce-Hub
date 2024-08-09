const axios = require('axios');

const getAmazonProducts = async (query) => {
  try {
    const response = await axios.get('https://real-time-product-search.p.rapidapi.com/search', {
      params: {
        q: query,
        country: 'us',
        language: 'en',
        page: 1,
        limit: 30,
        sort_by: 'BEST_MATCH',
        product_condition: 'ANY',
        min_rating: 'ANY'
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
      }
    });
    console.log('Amazon API Response:', response.data); // Debugging line
    return response.data.products; // Adjust this based on the actual API response structure
  } catch (error) {
    console.error('Error fetching Amazon products:', error);
    return null;
  }
};

module.exports = { getAmazonProducts };
