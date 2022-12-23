import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import CustomChatbot from '../components/bot.js' 

export default function App({ Component, pageProps }: AppProps) {
  return(<>
   <Component {...pageProps} />
   <CustomChatbot />
  <Footer/>
  </>)
}
