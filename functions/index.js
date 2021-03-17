const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IVCWBKeX9LkBqMnXBrl7SqNKE3xdg0u54V7YM60nJ0x9hn1Km9sIer5645BwoN0aWxmt7NMOXcXmWUJXJVtl6Pf00TvKfXZGB');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Helloo'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM !!!', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint 
// http://localhost:5001/clone-9cacb/us-central1/api