import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./Links.module.css";

export function Links() {

return(
<div className={styles.ctas}>
<a
  className={styles.primary}
  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    className={styles.logo}
    src="/vercel.svg"
    alt="Vercel logomark"
    width={20}
    height={20}
  />
  Deploy now
</a>
<a
  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.secondary}
>
  Read our docs
</a>
</div>

    );

}