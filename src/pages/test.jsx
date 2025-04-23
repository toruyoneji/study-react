import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Test() {
    return(
        <>
            <div
            className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
            >

                <Header />
                <h1>Testページです</h1>
            </div>
        </>
    );
}