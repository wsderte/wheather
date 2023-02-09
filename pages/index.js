import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/menu.module.css'

export default function Home() {
    return (
        <div className={styles.box}>
            <div className={styles.title}>Home</div>
            <p className={styles.text}> Veni vidi vici</p>
        </div>
    )
}
