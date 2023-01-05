import React from 'react'
import Image from 'next/image'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const Customerpay = () => {
    const [clientSecret, setClientSecret] = React.useState("");

    React.useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);

      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

      
    return (
        <div className="w-full max-h-screen text-center my-auto">
{/*     
          <main className="my-12">
    
          {/* {status && status === 'success' && (
              <div className='bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700'>
                Payment Successful
              </div>
            )}
            {status && status === 'cancel' && (
              <div className='bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700'>
                Payment Unsuccessful
              </div>
            )} 
    
            <h1 className="text-4xl font-semibold">Explore our subscriptions</h1>
            <div className="grid grid-cols-2 mt-10">
              <div className="items-center mx-auto">
                
                <p className="text-lg">Standard Plan</p>
                <Image src="/assets/standard.png"
                alt="standard plan"
                width={150}
                height={150}
                />
                <button className="bg-slate-100 hover:bg-slate-400  text-xl rounded-lg px-3" 
                onClick={createStripeSession}>
                    Purchase</button>
              </div>
    
              <div>
                
                <p>Premium Plan</p>
                <button className="bg-slate-100 hover:bg-slate-400  text-xl" 
                onClick={(() => {
                  checkout({
                    lineItems: [
                      {
                        price: "price_1MMWImSH7tI6iWG7xYdqU1rE",
                      }
                    ]
                  })
                })}>Purchase</button>
              </div>
              <div>
                
              </div>
            </div>
          </main> */}
          {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
        </div>
      )
}

export default Customerpay
