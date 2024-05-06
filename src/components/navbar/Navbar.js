import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/components/navbar/Navbar.module.css';

import { useUser } from '@auth0/nextjs-auth0/client';

const Navbar = () => {
    
    const router = useRouter();
    const { user } = useUser();

    const handleLogin = () => {
        router.push('/api/auth/login');
    };

    const handleLogout = () => {
        router.push('/api/auth/logout');
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

            {user ? (
                <div className={styles.loggedIn}>
                    <div className={styles.userName}>Hi, {user.name}!</div>
                    <button onClick={handleLogout} className={styles.button}>Logout</button>
                </div>

            ) : (
                <button onClick={handleLogin} className={styles.button}>Login</button>
            )}
        </nav>
    );
};


export default Navbar;