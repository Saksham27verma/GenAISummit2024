import React from 'react';
import Image from 'next/image';
import styles from '../styles/Spotlight.module.scss';

const Spotlight = () => {
  return (
    <div className={styles.spotlight}>
      {/* ...existing code... */}
      
      <div className={styles.main}>
        <div className={styles.imageContainer}>
          <Image 
            src="/spotlight1.png"
            alt="Spotlight Image 1"
            width={400}
            height={300}
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/spotlight2.png" 
            alt="Spotlight Image 2"
            width={400}
            height={300}
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/spotlight3.png"
            alt="Spotlight Image 3" 
            width={400}
            height={300}
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
      </div>

      {/* ...existing code... */}
    </div>
  );
};

export default Spotlight;
