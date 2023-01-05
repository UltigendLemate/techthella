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

      
    // return (
    //     <div className="App w-full max-h-screen text-center my-auto">
     
    //       <main className="my-12">
    
    //        {status && status === 'success' && (
    //           <div className='bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700'>
    //             Payment Successful
    //           </div>
    //         )}
    //         {status && status === 'cancel' && (
    //           <div className='bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700'>
    //             Payment Unsuccessful
    //           </div>
    //         )} 
    
    //         <h1 className="text-4xl font-semibold">Explore our subscriptions</h1>
    //         <div className="grid grid-cols-2 mt-10">
    //           <div className="items-center mx-auto">
                
    //             <p className="text-lg">Standard Plan</p>
    //             <Image src="/assets/standard.png"
    //             alt="standard plan"
    //             width={150}
    //             height={150}
    //             />
    //             <button className="bg-slate-100 hover:bg-slate-400  text-xl rounded-lg px-3" 
    //            >
    //                 Purchase</button>
    //           </div>
    
    //           <div>
                
    //             <p>Premium Plan</p>
    //             <button className="bg-slate-100 hover:bg-slate-400  text-xl" 
    //             >Purchase</button>
    //           </div>
    //           <div>
                
    //           </div>
    //         </div>
    //       </main> 
    //       {clientSecret && (
    //     <Elements options={options} stripe={stripePromise}>
    //       <CheckoutForm />
    //     </Elements>
    //   )}
    //     </div>
    //   )

    return (
        <>
        <form action="/api/checkout_sessions" method="POST" >
          <section>
            <button type="submit" role="link">
              Checkout
            </button>
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
              button {
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
              button:hover {
                opacity: 0.8;
              }
            `}
          </style>
        </form>




        </>
      );
}

export default Customerpay
