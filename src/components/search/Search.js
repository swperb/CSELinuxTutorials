import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './Search.module.css';

export default function Search() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const search = (e) => {
        e.preventDefault();
        router.push(`/search?query=${query}`);
    };

    return (
        <form onSubmit={search} className={styles.searchForm}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>Search</button>
        </form>
    );
}
