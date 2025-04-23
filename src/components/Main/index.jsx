import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./MainBody.module.css";
import { Footer } from "@/src/components/Footer";
import { Links } from "@/src/components/Links";
import { Headline } from "@/src/components/Headline";
import { useEffect } from "react";

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
