import Layout from "@/components/Layout";
import Carousel from "@/components/Carousel";
import React from "react";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
    {/* <Carousel /> */}

    <h2 className={styles.body}>Welcome</h2>
    <p className={styles.p}>
      Thank you for visiting the CSE/Linux Resources website. This is a website dedicated to students who want to
      improve their Computer Science & Engineering learning outside of the classroom by reinforcing topics covered in lectures,
      researching new languages and topics, and obtaining industry skills. Through the usage of this website, students can feel
      prepared and excited to begin their careers and succeed in the workforce.
    </p>

    </>
  );
}