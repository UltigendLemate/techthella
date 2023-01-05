const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
                currency: 'inr',
                product: 'prod_N6jnVuL4YWqNld',
                unit_amount: 199900
            },
            quantity: 1,
        },
          // {
          //   // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          //   price: 'price_1MMWK0SH7tI6iWG7KB3pQQSM',
          //   quantity: 1, 
          // },
          // {
          //   // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          //   price: 'price_1MMWImSH7tI6iWG7xYdqU1rE',
          //   quantity: 1,
          // }
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}