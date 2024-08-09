import React, { useState } from 'react';
import { compareProducts } from '../services/api';

const ProductList = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState('BEST_MATCH');
  
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await compareProducts(query, sortBy);
      console.log('Received data:', data); // Log the received data
      setResults(data.results || []); // Adjust based on your API response structure
    } catch (error) {
      console.error('Error performing search:', error); // Log any errors
    }
  };

  // Limit to the first 3 products
  const displayedResults = results;
  console.log(displayedResults.length);
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a product"
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="BEST_MATCH">Best Match</option>
          <option value="PRICE_LOW_TO_HIGH">Price: Low to High</option>
          <option value="PRICE_HIGH_TO_LOW">Price: High to Low</option>
        </select>
        <button type="submit">Search</button>
      </form>
      {displayedResults.length >= 0 && (
        <div>
          <h2>Product Results</h2>
          <ul>
            {displayedResults.map((product, index) => (
              <li key={index}>
                <a href={product.product_page_url} target="_blank" rel="noopener noreferrer">
                  <img src={product.product_photos[0]} alt={product.product_title} width="100" />
                  <h3>{product.product_title}</h3>
                  <p>{product.product_description}</p>
                  <p>Rating: {product.product_rating} ({product.product_num_reviews} reviews)</p>
                  <p>Price: {product.typical_price_range[0]} - {product.typical_price_range[1]}</p>
                  <a href={product.product_offers_page_url} target="_blank" rel="noopener noreferrer">
                    View Offers
                  </a>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductList;
