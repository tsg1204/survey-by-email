const keys = require('../config/keys');
const { Stripe } = require('stripe');
const stripe = Stripe(keys.stripeSecretKey);

module.exports = app => {
   app.post('/api/stripe', async (req, res) => {
        //console.log(req.body);
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 fro 5 credits',
            source: req.body.id
        });
        console.log(charge);
   });

};