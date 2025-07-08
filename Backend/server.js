const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS so frontend can access the API

// Route to serve products
app.get('/products', (req, res) => {
  const filePath = path.join(__dirname, 'products.json');
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(data);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read data' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
