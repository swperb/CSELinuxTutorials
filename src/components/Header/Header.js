import { useState } from 'react';
import styles from '@/components/Header/Header.module.css';
import { useRouter } from 'next/router';
import Search from '../Search/Search';

export default function Header(){

    const router = useRouter();
    const [query, setQuery] = useState('');

    return (
        <header className={styles.header}>
            <h1>CSE Resource Hub</h1>
            <Search />
        </header>
    );
};