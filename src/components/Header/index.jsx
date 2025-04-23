import styles from './Header.module.css';
import Link from 'next/link';

const NAV_ITEMS = [
    {href: "/", label: "index"},
    {href: "/about", label: "about"},
    {href: "/test", label: "test"},
];

export function Header() {
    return(
        <header className={styles.header}>
            {/* <Link href="/">
             <p className={styles.anchor}>Index</p>
            </Link>

            <Link href="/about">
             <p className={styles.anchor}>about</p>
            </Link> */}

            {NAV_ITEMS.map((item) => {
                return(
                    <Link key={item.href} href={item.href}>
                        <p className={styles.anchor}>{item.label}</p>
                    </Link>
                );
            })}

        </header>
    );
}