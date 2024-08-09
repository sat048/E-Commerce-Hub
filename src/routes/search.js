const express = require('express');
const router = express.Router();
const { getAmazonProducts } = require('../services/amazonService'); // Adjust path if needed

router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const amazonProducts = await getAmazonProducts(query);
    const limitedResults = amazonProducts.slice(0, 1); // Show only the first 3 results
    res.json(limitedResults);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

module.exports = router;
