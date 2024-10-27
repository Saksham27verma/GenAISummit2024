"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import styles from "../styles/Home.module.scss"; // Import the SCSS file

export function WavyBackgroundDemo() {
  return (
    <div className={styles.wavyBackgroundContainer}>
      <WavyBackground className={styles.wavyContent}>
        <div className={styles.contentWrapper}>
          <span className={styles.upperSubtitle}>The</span>
          <h1 className={styles.mainHeading1}>GenAI</h1>
          <h1 className={styles.mainHeading2}>Summit</h1>
          <span className={styles.lowerSubtitle}>2024</span>
          <h2 className={styles.mainHeading1}>Elevate.Innovate.Accelerate</h2>
          
        </div>
      </WavyBackground>
    </div>
  );
}