import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./Footer.module.css";

export function Footer() {

  const ITEM = [
  {
    id: 1,
    text: "JavaScript",
    description: "test object 1",
  },

  {
    id: 2,
    text: "TypeScript",
    description: "test object 2",
  }, 
  
  {
    id: 3,
    text: "Modan JavaScript",
    description: "test object 3",
  },

  {
    id: 4,
    text: "HTML CSS",
    description: "test object 4"
  },

 ];
  return (
    <>
        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>

        </footer>

        <div className={styles.item}>
        {ITEM.map(item => {
          return(
            <dl key={item.id}>
              <dt><h2>{item.text}</h2></dt>
              <dd>{item.description}</dd>
            </dl>
          );
        })}
        </div>
        <br />
        <h2>thanks by vercel</h2>

       
    </>
  );
}
