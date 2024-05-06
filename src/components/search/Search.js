import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Search.module.css';

export default function Search() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const searchPosts = (e) => {
        e.preventDefault();
        router.push(`/search?query=${query}`);
    };

    return (
        <form onSubmit={searchPosts} className={styles.form}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts..."
                className={styles.input}
            />
            <button type="submit" className={styles.button}>Search</button>
        </form>
    );
}
