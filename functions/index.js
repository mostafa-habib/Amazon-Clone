const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
// const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const stripe = require("stripe")(
  "sk_test_51Kk7RtKTwVvKkRx1Pi90EJfmj1Xvn1hygVeWFjxA8ReSo7ZkzNufTAtx5JuZefp6FwzUoPo9XRHlz8Rgc7EgAnFG00rb0qGXSN"
);

app.use(express.static("public"));
app.use(express.json());
app.use(cors({origin: '*'}))

app.get("/", (req, res) => res.status(200).send("hello Desha"));

app.post("/payment/create", async (req, res) => {
    const total = req.query.total;
    console.log('recived')
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// app.listen(process.env.PORT, () =>
//   console.log("Node server listening on port ")
// );
exports.api = functions.https.onRequest(app)
//http://localhost:5001/amzon-clone-41385/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
