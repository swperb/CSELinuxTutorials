import Link from 'next/link';
import React from 'react';
import styles from '@/styles/components/Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.quick}>
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="https://cse.msstate.edu" target="_blank" rel="noopener noreferrer">CSE Department</a></li>
                    <li><a href="https://canvas.msstate.edu" target="_blank" rel="noopener noreferrer">Canvas</a></li>
                    <li><a href="https://my.msstate.edu" target="_blank" rel="noopener noreferrer">myState</a></li>
                </ul>
            </div>
            <div className={styles.contact}>
                <h3>Contact Us</h3>
                <p>
                    Department of Computer Science and Engineering<br />
                    665 George Perry Street<br />
                    300 Butler Hall<br />
                    Box 9637<br />
                    Mississippi State, MS 39762<br />
                    Email: <a href="mailto:office@cse.msstate.edu">office@cse.msstate.edu</a><br />
                    Phone: (662) 325-2756
                </p>
            </div>
            <div className={styles.about}>
                <h3>About</h3>
                <p>
                    As the creator of this website, my vision was to enhance the learning experience for CSE students here at MSU. The goal was and
                    still is to fill in the gaps left from classes due to strict college schedules and offer supplemental material to enhance students&apos;
                    performance, not only in the classroom, but in personal programming experiences as well.
                </p>
            </div>
        </aside>
    );
};


export default Sidebar;