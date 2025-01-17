import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Highlights.module.scss';

const Highlights = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GenAI Summit</title>
        <meta name="description" content="Highlights from the GenAI Summit" />
        <link rel="icon" href="/GenAI.svg" />
      </Head>

      <div className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            src="/highlights1.png"
            alt="GenAI Summit Highlights 1"
            width={1920}
            height={1080}
            className={styles.highlightImage}
          />
          <Image
            src="/highlights2.png"
            alt="GenAI Summit Highlights 2"
            width={1920}
            height={1080}
            className={styles.highlightImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
