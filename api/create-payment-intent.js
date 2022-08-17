const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

module.exports = async function handler(req, res) {
  try {
    const { amount } = JSON.parse(JSON.stringify(req.body));
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    res.status(200).send({
      paymentIntent,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error,
    });
  }
};
