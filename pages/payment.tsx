import React from 'react'
// import PaymentModal from './../components/PaymentModal';
import Link from 'next/link'


const Payment = () => {
  return (
    <div>
        This is payment page.

<Link href={"/Customer"}>Customer page</Link>        
<Link href={"/Vendor"}>Vendor page</Link>        
    </div>
  )
}

export default Payment