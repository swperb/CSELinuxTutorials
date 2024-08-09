import { useState } from 'react';
import styles from '@/components/footer/Footer.module.css';
import { useRouter } from 'next/router';
import Search from '../Search/Search';

export default function Footer(){
    return (
      <footer className={styles.footer}>
        <p className={styles.text}>© Stephen Proctor 2024</p>
      </footer>
    );
  };