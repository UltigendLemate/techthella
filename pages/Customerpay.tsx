import React, {useEffect} from 'react'
import Image from 'next/image'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import {useRouter } from 'next/router'


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const Customerpay = () => {
    const [clientSecret, setClientSecret] = React.useState("");
    const router = useRouter(); 
    const {success, canceled} = router.query;

      useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

         
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }

        
      }, [success, canceled]);

      

      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

    return (
      
        <form className="mt-12 ml-[400px] h-70vh" 
        action="/api/checkout_sessions" method="POST" >
          <section >
            <h1 className="text-2xl text-center font-semibold">
              Be a part of our Fam!
            </h1>
            <Image
              src={"/assets/payment.png"}
              width={100}
              height={100}
              className="mx-auto"
              alt=""
            />
        
              <a 
              className="text-center w-3/5 rounded-xl"
              href="https://buy.stripe.com/test_9AQdTPcBW0OVbT2001">
                Checkout 
            </a>
            
            
          </section>
          <style jsx>
            {`
              section {
                background: #ffffff;
                display: flex;
                flex-direction: column;
                width: 400px;
                height: 112px;
                border-radius: 6px;
                justify-content: space-between;
              }
              a {
                height: 36px;
                background: #556cd6;
                border-radius: 4px;
                color: white;
                border: 0;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
              }
              a:hover {
                opacity: 0.8;
              }
            `}
          </style>
        </form>
      );
}

export default Customerpay
