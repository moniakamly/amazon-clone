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
app.get('/', (request, response) => response.status(200).send('Helloo'))

// - Listen command
exports.api = functions.https.onRequest(app);