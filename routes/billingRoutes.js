const keys = require('../config/keys');
//const stripe = ('stripe')(keys.stripeSecretKey);

module.exports = app => {
   app.post('/api/stripe', (req, res) => {
        console.log(req.body);
   });

};