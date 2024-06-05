const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});