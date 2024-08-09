const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');

dotenv.config();

MONGO_URI='mongodb+srv://satyak:C6hcz1XlMnMC5Lun@wolvhub.5nzbhsr.mongodb.net/';

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
