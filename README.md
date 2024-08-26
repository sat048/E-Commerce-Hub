# E-Commerce Price Comparison Platform

## Overview

This project is a robust e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform integrates with multiple external APIs, including Amazon, Walmart, and 30+ online stores, to provide real-time product comparison. Users can search for products and receive price comparisons across various retailers. Additionally, the platform incorporates AI-generated product descriptions and a chatbot for personalized product recommendations using OpenAI's GPT-4 API.

## Features

- **User Authentication**: Secure user registration, login, and profile management using JWT (JSON Web Tokens).
- **Product Search and Comparison**: Real-time product search and price comparison across multiple online stores.
- **AI Integration**: 
  - Dynamic product descriptions generated using OpenAI's GPT-4 API.
  - Chatbot for personalized product recommendations based on user queries.
- **Shopping Cart and Checkout**: Add products to the cart and simulate a checkout process.
- **Admin Panel**: Manage product listings, users, and orders.
- **Performance Testing**: User load tests conducted using Apache JMeter to simulate high traffic scenarios.

## Technologies Used

- **Frontend**: 
  - React.js: Building the user interface and handling client-side logic.
  - HTML/CSS: Structuring and styling the UI.
- **Backend**:
  - Node.js & Express.js: Building RESTful APIs and handling server-side logic.
  - MongoDB: Storing user data, product information, and order details.
  - OpenAI API: For generating product descriptions and providing a chatbot.
- **Testing**:
  - Apache JMeter: Simulating user load and testing system performance.
  - Jest: Unit and integration testing for backend APIs.

## JavaScript Files Overview

### Frontend (React.js)
- **src/App.js**: The main entry point for the React application, handling routing between different pages.
- **src/components/Navbar.js**: Contains the navigation bar component displayed at the top of each page.
- **src/components/SearchBar.js**: Handles user input for searching products and triggers the API call to fetch product data.
- **src/components/ProductList.js**: Displays the list of products returned from the search query. It processes and renders the first 3 product results on the page.
- **src/pages/CompareProducts.js**: The main page where users can search for products and compare prices across different stores.
- **src/pages/ProductDetails.js**: Displays detailed information about a selected product, including offers from different stores.
- **src/components/Chatbot.js**: Integrates the OpenAI chatbot for personalized product recommendations.

### Backend (Node.js/Express.js)
- **index.js**: The entry point for the Node.js server, responsible for starting the server and handling routes.
- **routes/api/products.js**: Defines the API endpoints for searching and comparing products.
- **controllers/productsController.js**: Contains the logic for fetching product data from external APIs and processing it.
- **middleware/auth.js**: Handles user authentication using JWT for secure API access.

## Setup Instructions

### Prerequisites

- Node.js and npm installed.
- MongoDB Atlas account for cloud database storage.
- RapidAPI account for accessing product data APIs.
- OpenAI API key for generating product descriptions and chatbot functionality.
