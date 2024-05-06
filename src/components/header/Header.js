import { useState } from 'react';
import styles from '@/components/header/Header.module.css';
import { useRouter } from 'next/router';
import Search from '../search/Search';

const Header = () => {

    const router = useRouter();
    const [query, setQuery] = useState('');

    return (
        <header className={styles.header}>
            <h1>CSE Resource Hub</h1>
            <Search />
        </header>
    );
}

export default Header;