import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Spotlight.module.scss';

const Spotlight: React.FC = () => {
  return (
    <div className={styles.spotlight}>
      <Head>
        <title>Spotlight</title>
        <meta name="description" content="Spotlight page showcasing key highlights." />
        <link rel="icon" href="/GenAI.svg" />
      </Head>
      <main className={styles.main}>
        <Image src="/spotlight1.png" alt="Spotlight 1" layout="responsive" width={500} height={500} />
        <Image src="/spotlight2.png" alt="Spotlight 2" layout="responsive" width={500} height={500} />
        <Image src="/spotlight3.png" alt="Spotlight 3" layout="responsive" width={500} height={500} />
      </main>
    </div>
  );
};

export default Spotlight;
