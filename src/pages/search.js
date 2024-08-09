import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/components/Search/Search.module.css';
import Link from 'next/link';

export default function SearchResults() {
    const router = useRouter();
    const { query } = router.query;
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query) {
            const fetchResults = async () => {
                const res = await fetch(`/api/search?query=${query}`);
                const data = await res.json();
                setResults(data);
            };
            fetchResults();
        }
    }, [query]);

    return (
        <div className={styles.container}>
            <h1>Search Results for &quot;{query}&quot;</h1>
            <ul className={styles.results}>
                {results.length > 0 ? (
                    results.map(course => (
                        <li key={course.id} className={styles.resultItem}>
                            <h3>
                                <Link href={`/classes/${course.course_id}`}>
                                    CSE {course.course_id}: {course.name}
                                </Link>
                            </h3>
                            <p>{course.description}</p>
                        </li>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </ul>
        </div>
    );
}
