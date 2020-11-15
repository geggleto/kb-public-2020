'use strict';

const express = require('express');
const axios = require('axios');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: __dirname + '/../.env.local' });
}

const API_KEY = process.env.KV_API_KEY;

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());
app.options('*', cors()) // include before other routes

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/kitties/:wallet', (req, res) => {
    let offset = parseInt(req.query.offset) || 0;
    axios.get('https://public.api.cryptokitties.co/v1/kitties?owner_wallet_address='+req.params.wallet+'&offset='+offset+'&limit=100', {
        headers : {
            'x-api-token': API_KEY
        }
    }).then((response) => {
        res.json(response.data);
    }).catch((e) => {
        res.status(500);
    })
})

if (API_KEY) {
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
} else {
    console.log("KV API KEY MISSING");
}