import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export function MainBody(props) {
    
  return (
     
        <main className={styles.main}>
         
         <Headline page={props.page}>

          <li>Save and see your changes instantly.</li>
          
         </Headline>

         <Links />
         
        </main>

       
    
  );
}
