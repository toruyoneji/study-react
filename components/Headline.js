import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";



export function Headline(props) {
 
    
  return (
    <div>   
          <h1>{props.page} Page</h1>
          <ol>
            <li>
              Get started by editing <code>pages/{props.page}.js</code>.
            </li>
            {props.children}
          </ol>

         
  
    </div>
  );
}
