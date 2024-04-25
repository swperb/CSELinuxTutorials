// pages/classes/index.js
import Link from 'next/link';
import BackArrow from '@/components/backArrow/backArrow';
import styles from '@/styles/classes/Categories.module.css'; // Assuming you'll use CSS Modules for styling

const ClassCategories = [
  { id: 1, title: 'CSE 1000-1999', description: 'Freshman Level Courses', link: '/classes/1000' },
  { id: 2, title: 'CSE 2000-2999', description: 'Sophomore Level Courses', link: '/classes/2000'},
  { id: 3, title: 'CSE 3000-3999', description: 'Junior Level Courses', link: '/classes/3000'},
  { id: 4, title: 'CSE 4000-4999', description: 'Senior Level Courses', link: '/classes/4000'},
];

export default function Classes() {
  return (
    <div className={styles.container}>
      <BackArrow className={styles.backArrow} />
      <h1 className={styles.h1}>Class Categories</h1>
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
