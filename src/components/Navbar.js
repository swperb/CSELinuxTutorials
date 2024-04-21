import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/components/Navbar.module.css';

const Navbar = () => {
    
    const router = useRouter();

    const handleLogin = () => {
        router.push('/api/auth/login');
    };
    
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/classes'>Classes</Link>
                </li>
                <li>
                    <Link href='/resources'>Resources</Link>
                </li>
                <li>
                    <Link href='/tutorials'>Tutorials</Link>
                </li>
            </ul>

            <button onClick={handleLogin} className={styles.login}>Admin? Login Here</button>

            <div className={styles.search}>
                <input type='text' placeholder='Search' />
                <button type='submit' >Search</button>
            </div>
        </nav>
    );
};


export default Navbar;