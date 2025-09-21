const express = require('express'); 
const sql = require('mssql')

const app = express();              
const port = 5000;

app.use(express.json());

app.get('/', async(req, res) => {        
    res.sendFile('index.html', {root: __dirname});    
    
});

app.get('/page', async(req, res) => {
    res.status(200).send("Response received");        
    //res.sendFile('page2.html', {root: __dirname});
        
    
});

app.listen(port, () => {  
    console.log(`Now listening on port ${port}`); 
});