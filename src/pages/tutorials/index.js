import Link from 'next/link';
import BackArrow from '@/components/backArrow/backArrow';
import styles from '@/styles/classes/Categories.module.css'; // Assuming you'll use CSS Modules for styling

const ClassCategories = [
  { id: 1, title: 'Install WSL', description: 'Learn how to install WSL', link: '/tutorials/installwsl' },
];

export default function Classes() {
  return (
    <>
      <BackArrow className={styles.backArrow} />
      <h1 className={styles.h1}>Class Categories</h1>
      <div className={styles.categories}>
        {ClassCategories.map((category) => (
          <Link key={category.id} href={category.link} className={styles.link} passHref>
            <div className={styles.pill}>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
