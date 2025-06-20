import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css";
import { Footer } from "@/src/components/Footer";
import { Links } from "@/src/components/Links";
import { Headline } from "@/src/components/Headline";
import { MainBody } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useCounter } from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About(props) {

  // const {
  //   count,
  //   isShow,
  //   doubleCount,
  //   handleClick,
  //   handleShow,
  //   text,
  //   array,
  //   handleChange,
  //   handleArray,
    
  // } = props;
  

  return (
    <>
      <Head>
        <title>about Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />

        {props.isShow ? <h2>{props.doubleCount}</h2> : null}
        <button className={styles.button} onClick={props.handleClick}>ボタン</button>
        <button className={styles.button} onClick={props.handleShow}>
          {props.isShow ? "非表示" : "表示"}</button>


        <input type="text" value={props.text} onChange={props.handleChange} />
        <button className={styles.button} onClick={props.handleArray}>Add Array</button>

        <ul>
          {props.array.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>

        
         <MainBody page="about" />

        <Footer />
        
      </div>
    </>
  );
}
