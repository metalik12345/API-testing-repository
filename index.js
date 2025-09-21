require('dotenv').config({ path: '.env' });
const express = require('express');
const sql = require('mssql');
const cors = require('cors');

//console.log(process.env.PORT);

const app = express();
app.use(cors());  // Enable CORS to accept requests from different origins
app.use(express.json());

const config = {
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  server: process.env.server,  
  options: {
    encrypt: true,             // Required if using Azure
    trustServerCertificate: true // Use this for local dev/test
  }
};

async function connectAndQuery() {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM dbo.[@ONE_SCMT_APP_VIA_SSR]');
    console.log('Query Results:', result.recordset);

    await sql.close(); // Good practice
  } catch (err) {
    console.error('SQL error', err);
    await sql.close();
  }
}

//connectAndQuery();

app.get('/api/data', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM dbo.[@ONE_SCMT_APP_VIA_SSR]');
    console.log('Query Results:', result.recordset);
    res.send("Web Page is accesssible");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

// POST endpoint to insert data
app.post('/api/receipt', async (req, res) => {
  const { name } = req.body;  // Assuming you're sending a name parameter
  try {
    await sql.connect(config);
    await sql.query`INSERT INTO your_table (name) VALUES (${name})`;
    res.status(201).send('Data inserted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
