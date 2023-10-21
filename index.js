const express = require('express');
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');
const userRoutes = require('./routes/users.js')

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express()
app.use(cors())
app.use(express.json());


app.use('/api/users', userRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`connected to RKK db and listening on port ${process.env.PORT}`))
    })
    .catch((err) => {
        console.log(err);
    })





















// app.post('/create-payment-intent', async (req, res) => {
//     const { item } = req.body

//     const paymentIntent = await stripe.paymentIntents.create({
//         currency: 'usd',
//         amount: 100000,
//         "payment_method_types": [
//             "card"
//         ],
//     })

//     res.send({
//         clientSecret: paymentIntent.client_secret,
//     })
// })

