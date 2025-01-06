/*import db from '../../lib/db'; // Import the database connection

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { rows } = await db.query('SELECT * FROM "Energy"');
      res.status(200).json({ success: true, data: rows });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
*/

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { rows } = await pool.query('SELECT * FROM "Energy"');
      // Clean up the data to make it more readable
      const formattedData = rows.map(option => ({
        id: option.id,
        energyType: option.EnergyType,
        provider: option.Provider,
        location: option.Location,
      }));

      res.status(200).json({ success: true, data: formattedData });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
