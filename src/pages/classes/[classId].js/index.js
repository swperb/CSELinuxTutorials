// pages/classes/index.js
import Link from 'next/link';
import styles from '@/styles/classes/Classes.module.css'; // Assuming you'll use CSS Modules for styling


export default function Classes() {
  return (
    
    <div className={styles.container}>
      <h1 className={styles.h1}>CSE </h1>
      <div className={styles.categories}>
        {ClassCategories.map((category) => (
          <Link key={category.id} href={category.link} passHref>
            <div className={styles.pill}>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
