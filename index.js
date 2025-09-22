require('dotenv').config({ path: '.env' });
const express = require('express');
const bodyParser = require("body-parser");
const sql = require('mssql');
const cors = require('cors');

//console.log(process.env.PORT);

const app = express();
app.use(cors());  // Enable CORS to accept requests from different origins
app.use(express.json());
app.use(bodyParser.json());

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

/*async function connectAndQuery() {
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
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM dbo.[@ONE_SCMT_APP_VIA_SSR]');
    console.log('Query Results:', result.recordset);
    //res.send("Web Page is accesssible");
    res.send(result.recordset);
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
    const pool = await sql.connect(config);
    await sql.query`INSERT INTO your_table (name) VALUES (${name})`;
    res.status(201).send('Data inserted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});*/

app.get("/api/testrun", async (req, res) => {
  let rows = [];
      rows.push({
      TimeStamp: new Date(),  // Column A
      PORT_LOAD: "Nhava Sheva",    // Column B
      VESL_NAME: "TEST",
      SHP_EMAIL: "METALIK12345@GMAIL.COM",
      BL_NO: "TEST1234567",
      CONT_NO: "TEST1234567",
      CONT_TYPE: "D2",
      VGM_WT: 12345,
      PORT_DSCH: "TEST",
      PLAC_DELV: "TEST",
      FORWARDER: "TEST",
      COMD_CODE: "TEST",
      CARGO_TYPE: "DRY",
      REFR_TEMP: 0,
      HUMIDITY: "",
      IMO_CODE: "",
      IMO_CLASS:"",
      MODE: "",
      REMARKS: "",     
      mFormID: "",
      SBReady: ""
    });


  try {
    let pool = await sql.connect(config);

    for (let row of rows) {
          //const { TimeStamp,PORT_LOAD,VESL_NAME,SHP_EMAIL,BL_NO,CONT_NO,CONT_TYPE,VGM_WT,PORT_DSCH,PLAC_DELV,FORWARDER,COMD_CODE,CARGO_TYPE,REFR_TEMP,HUMIDITY,IMO_CODE,IMO_CLASS,MODE,REMARKS,mFormID,SBReady } = row;

          await pool
            .request()
            .input("TimeStamp", sql.DateTime, row.TimeStamp)
            .input("PORT_LOAD", sql.VarChar, row.PORT_LOAD)
            .input("VESL_NAME", sql.VarChar, row.VESL_NAME)
            .input("SHP_EMAIL", sql.VarChar, row.SHP_EMAIL)
            .input("BL_NO", sql.VarChar, row.BL_NO)
            .input("CONT_NO", sql.VarChar, row.CONT_NO)
            .input("CONT_TYPE", sql.VarChar, row.CONT_TYPE)
            .input("VGM_WT", sql.Numeric, row.VGM_WT)
            .input("PORT_DSCH", sql.VarChar, row.PORT_DSCH)
            .input("PLAC_DELV", sql.VarChar, row.PLAC_DELV)
            .input("FORWARDER", sql.VarChar, row.FORWARDER)
            .input("COMD_CODE", sql.VarChar, row.COMD_CODE)
            .input("CARGO_TYPE", sql.VarChar, row.CARGO_TYPE)
            .input("REFR_TEMP", sql.Numeric, row.REFR_TEMP)
            .input("HUMIDITY", sql.VarChar, row.HUMIDITY)
            .input("IMO_CODE", sql.VarChar, row.IMO_CODE)
            .input("IMO_CLASS", sql.VarChar, row.IMO_CLASS)
            .input("MODE", sql.VarChar, row.MODE)
            .input("REMARKS", sql.VarChar, row.REMARKS)
            .input("mFormID", sql.VarChar, row.mFormID)
            .input("SBReady", sql.VarChar, row.SBReady)
            .query("INSERT INTO [KAIYO_TEST].dbo.[@ONE_SCMT_APP_VIA_SSR] (TimeStamp,PORT_LOAD,VESL_NAME,SHP_EMAIL,BL_NO,CONT_NO,CONT_TYPE,VGM_WT,PORT_DSCH,PLAC_DELV,FORWARDER,COMD_CODE,CARGO_TYPE,REFR_TEMP,HUMIDITY,IMO_CODE,IMO_CLASS,MODE,REMARKS,mFormID,SBReady) VALUES (@TimeStamp,@PORT_LOAD,@VESL_NAME,@SHP_EMAIL,@BL_NO,@CONT_NO,@CONT_TYPE,@VGM_WT,@PORT_DSCH,@PLAC_DELV,@FORWARDER,@COMD_CODE,@CARGO_TYPE,@REFR_TEMP,@HUMIDITY,@IMO_CODE,@IMO_CLASS,@MODE,@REMARKS,@mFormID,@SBReady)");
        }
    //await sql.connect(config);
    //await sql.query`INSERT INTO your_table (name) VALUES (${name})`;
    res.status(201).send('Data inserted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
  
});

app.post('/api/testrun', async (req, res) => {
  //const { name } = req.body;  // Assuming you're sending a name parameter
 let rows = [];
      rows.push({
      TimeStamp: "",  // Column A
      PORT_LOAD: "Nhava Sheva",    // Column B
      VESL_NAME: "TEST",
      SHP_EMAIL: "METALIK12345@GMAIL.COM",
      BL_NO: "TEST1234567",
      CONT_NO: "TEST1234567",
      CONT_TYPE: "D2",
      VGM_WT: 12345,
      PORT_DSCH: "TEST",
      PLAC_DELV: "TEST",
      FORWARDER: "TEST",
      COMD_CODE: "TEST",
      CARGO_TYPE: "DRY",
      REFR_TEMP: 0,
      HUMIDITY: "",
      IMO_CODE: "",
      IMO_CLASS:"",
      MODE: "",
      REMARKS: "",
      ACCEPTED: "",
      STATUS: "",
      GATEIN_TIME: "",
      ASR_No: "",
      ASR_Date:"",
      mFormID: "",
      SBReady: ""
    });


  try {
    let pool = await sql.connect(dbConfig);

    for (let row of rows) {
          const { TimeStamp,PORT_LOAD,VESL_NAME,SHP_EMAIL,BL_NO,CONT_NO,CONT_TYPE,VGM_WT,PORT_DSCH,PLAC_DELV,FORWARDER,COMD_CODE,CARGO_TYPE,REFR_TEMP,HUMIDITY,IMO_CODE,IMO_CLASS,MODE,REMARKS,ACCEPTED,STATUS,GATEIN_TIME,ASR_No,ASR_Date,mFormID,SBReady } = row;

          await pool
            .request()
            .input("TimeStamp", sql.DateTime, TimeStamp)
            .input("PORT_LOAD", sql.VarChar, PORT_LOAD)
            .input("VESL_NAME", sql.VarChar, VESL_NAME)
            .input("SHP_EMAIL", sql.VarChar, SHP_EMAIL)
            .input("BL_NO", sql.VarChar, BL_NO)
            .input("CONT_NO", sql.VarChar, CONT_NO)
            .input("CONT_TYPE", sql.VarChar, CONT_TYPE)
            .input("VGM_WT", sql.Numeric, VGM_WT)
            .input("PORT_DSCH", sql.VarChar, PORT_DSCH)
            .input("PLAC_DELV", sql.VarChar, PLAC_DELV)
            .input("FORWARDER", sql.VarChar, FORWARDER)
            .input("COMD_CODE", sql.VarChar, COMD_CODE)
            .input("CARGO_TYPE", sql.VarChar, CARGO_TYPE)
            .input("REFR_TEMP", sql.Numeric, REFR_TEMP)
            .input("HUMIDITY", sql.VarChar, HUMIDITY)
            .input("IMO_CODE", sql.VarChar, IMO_CODE)
            .input("IMO_CLASS", sql.VarChar, IMO_CLASS)
            .input("MODE", sql.VarChar, MODE)
            .input("REMARKS", sql.VarChar, REMARKS)
            .input("ACCEPTED", sql.VarChar, ACCEPTED)
            .input("STATUS", sql.VarChar, STATUS)
            .input("GATEIN_TIME", sql.DateTime, GATEIN_TIME)
            .input("ASR_No", sql.VarChar, ASR_No)
            .input("ASR_Date", sql.DateTime, ASR_Date)
            .input("mFormID", sql.VarChar, mFormID)
            .input("SBReady", sql.VarChar, SBReady)
            .query("INSERT INTO dbo.[@ONE_SCMT_APP_VIA_SSR] (TimeStamp,PORT_LOAD,VESL_NAME,SHP_EMAIL,BL_NO,CONT_NO,CONT_TYPE,VGM_WT,PORT_DSCH,PLAC_DELV,FORWARDER,COMD_CODE,CARGO_TYPE,REFR_TEMP,HUMIDITY,IMO_CODE,IMO_CLASS,MODE,REMARKS,ACCEPTED,STATUS,GATEIN_TIME,ASR_No,ASR_Date,mFormID,SBReady) VALUES (@TimeStamp,@PORT_LOAD,@VESL_NAME,@SHP_EMAIL,@BL_NO,@CONT_NO,@CONT_TYPE,@VGM_WT,@PORT_DSCH,@PLAC_DELV,@FORWARDER,@COMD_CODE,@CARGO_TYPE,@REFR_TEMP,@HUMIDITY,@IMO_CODE,@IMO_CLASS,@MODE,@REMARKS,@ACCEPTED,@STATUS,@GATEIN_TIME,@ASR_No,@ASR_Date,@mFormID,@SBReady)");
        }
    //await sql.connect(config);
    //await sql.query`INSERT INTO your_table (name) VALUES (${name})`;
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
