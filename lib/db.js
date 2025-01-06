const { Pool } = require('pg');

// Create a new pool instance with your PostgreSQL connection string
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Export the query function to interact with the database
module.exports = {
  query: (text, params) => pool.query(text, params),
};
