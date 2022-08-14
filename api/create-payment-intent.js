const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

module.exports = async function handler(event) {
  try {
    const { amount } = JSON.parse(JSON.stringify(event.body));
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        paymentIntent,
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
