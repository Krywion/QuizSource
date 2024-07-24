import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";
import quizHeroImage from "../assets/quiz-hero.jpg";


export default function Hero() {
  return (
      <section className={styles.hero}>
          <div className={styles.content}>
              <h1 className={styles.title}>
                    Learn faster with QuizSource
              </h1>
              <p className={styles.description}>
                    QuizSource is a quiz app that allows you to create and share quizzes with your friends.
              </p>

              <button className={styles.btn}>Get started</button>
          </div>
          <div className={styles.image}>
                <Image
                    src={quizHeroImage}
                    alt="QuizSource hero image"
                    width={400}
                    height={400}
                />
          </div>
      </section>
  );
}
