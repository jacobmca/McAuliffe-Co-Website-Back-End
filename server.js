const express = require('express');
const sequelize = require('./config/connection'); // Assuming your Sequelize initialization is here
const routes = require('./routes'); // Assuming your routes are configured in the routes folder

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Sync sequelize models and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
