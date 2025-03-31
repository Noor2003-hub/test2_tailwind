import { Montserrat } from "next/font/google";
import { AppProps } from 'next/app'; 
import './globals.css';
import Header from '../src/app/components/Header';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '700'
});

// Add proper type annotation
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main  className={montserrat.className} >
      <header><Header /></header>
      <Component {...pageProps} />
    </main>
  );
}
