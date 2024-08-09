const express = require('express');
const axios = require('axios');
const router = express.Router();

// Replace with your actual RapidAPI key and host
const RAPIDAPI_KEY = 'f89499c723msh70b7084b36c283dp19493cjsnb4b488c9e94a';
const RAPIDAPI_HOST = 'real-time-product-search.p.rapidapi.com';

router.get('/compare', async (req, res) => {
  const { q, sort_by } = req.query;

  // Construct API request options
  const options = {
    method: 'GET',
    url: `https://${RAPIDAPI_HOST}/search`,
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': RAPIDAPI_HOST
    },
    params: {
      q: q || 'Nike shoes', // Default to 'Nike shoes' if no query provided
      country: 'us',
      language: 'en',
      page: 1,
      limit: 30,
      sort_by: sort_by || 'BEST_MATCH',
      product_condition: 'ANY',
      min_rating: 'ANY'
    }
  };

  try {
    const response = await axios.request(options);
    console.log('Sending request to API...'); // Log before sending request

    const products = response.data; // Adjust based on the actual API response structure
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});

module.exports = router;
