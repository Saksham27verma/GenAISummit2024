import React from 'react';
import styles from '../styles/Themes.module.scss';
import Marquee from '@/components/ui/marquee';
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Fin-Tech",
    username: "Innovation",
    body: "Transforming financial services through AI",
  },
  {
    name: "Health-Tech",
    username: "Healthcare",
    body: "Revolutionizing patient care with AI",
  },
  {
    name: "Ed-Tech",
    username: "Education",
    body: "Reshaping learning experiences",
  },
  {
    name: "AI-Tech",
    username: "Technology",
    body: "Pushing the boundaries of innovation",
  },
  {
    name: "DeepFake",
    username: "Security",
    body: "Understanding implications and safeguards",
  },
  {
    name: "Ethical AI",
    username: "Ethics",
    body: "Responsible AI development",
  },
];

const ReviewCard = ({ name, username, body }) => {
  return (
    <figure className={styles.reviewCard}>
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className={styles.name}>{name}</figcaption>
          <p className={styles.username}>{username}</p>
        </div>
      </div>
      <blockquote className={styles.body}>{body}</blockquote>
    </figure>
  );
};

const Themes = () => {
  const firstRow = reviews.slice(0, 3);
  const secondRow = reviews.slice(3);

  return (
    <section className={styles.section}>
      <div className={styles.marqueeSection}>
        <div className="w-full">
          <Marquee className="[--duration:30s]" pauseOnHover repeat={2}>
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          
          <Marquee className="[--duration:30s]" pauseOnHover reverse repeat={2}>
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
        <div className={styles.gradientLeft}></div>
        <div className={styles.gradientRight}></div>
      </div>
      
      <div className={styles.description}>
        <h2>Conference Themes</h2>
        <p>
          Generative AI is more than a technology. It&apos;s the engine driving the future
          of innovation. From automating complex processes to creating entirely new
          forms of content, GenAI is unlocking possibilities that were once the realm
          of science fiction. This summit is your gateway to understanding how GenAI
          is not just adapting to the world but actively shaping it, from business
          strategies to everyday experiences.
        </p>
      </div>
    </section>
  );
};

export default Themes;
