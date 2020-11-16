'use strict';

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const session = require('express-session');

const MongoClient = require('mongodb').MongoClient;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: __dirname + '/../.env.local' });
}

const API_KEY = process.env.KV_API_KEY;

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST','PUT','DELETE'],
    credentials: true // enable set cookie
}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

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
});

app.post('/identity/:wallet', (req, res) => {
    req.session.identity = req.params.wallet;

    res.json(req.session);
});

app.get('/identity', async (req, res) => {

    let client = await getMongoConnection();
    let db = await client.db('kittybattles');
    let user = await db.collection('users').findOne({ _id : req.session.identity });
    res.json({
        me : req.session.identity,
        payload: user
    })

    client.close();
});

app.put('/data', async (req, res) => {
    let client = await getMongoConnection();
    let db = await client.db('kittybattles');

    let result = await db.collection('users').updateOne(
        { _id : req.session.identity },
        {
            $set : {
                bp: req.body.bp || 100,
                suits : req.body.suits,
                items : req.body.items
            }
        }, {
        upsert : true
    });

    res.json({});
});

if (API_KEY) {
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
} else {
    console.log("KV API KEY MISSING");
}

async function getMongoConnection() {
    const uri = `mongodb+srv://KittyBattles:${process.env.MONGO_PASSWORD}@cluster0.eqqpj.mongodb.net/kittybattles?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    return await client.connect();
}