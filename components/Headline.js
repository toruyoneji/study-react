import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/components/Headline.module.css";



export function Headline(props) {
 
    
  return (
    <div>   
          <h1 className={styles.h1}>{props.page} Page</h1>
          <ol>
            <li>
              Get started by editing <code className={styles.code}>pages/{props.page}.js</code>.
            </li>
            {props.children}
          </ol>

         
  
    </div>
  );
}
