import BackArrow from '@/components/backArrow/backArrow';
import styles from '@/styles/classes/Classes.module.css';
import Link from 'next/link';

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function getServerSideProps(req, res) {

    const { level } = req.query

    const lowerBound = parseInt(level)
    const upperBound = parseInt(level) + 999

    const courses = await prisma.courses.findMany({
        where: {
        course_id: {
            gte: lowerBound,
            lte: upperBound,
        },
        },

        select: {
            name: true,
            description: true,
            course_id: true,
        }


    })

  return {
    props: {
      courses,
      lowerBound,
      upperBound
    },
  }
}

export default function Courses({ courses, lowerBound, upperBound }) {

  courses.sort((a, b) => a.course_id - b.course_id)

    return (
      <div className={styles.container}>
        <BackArrow className={styles.backArrow} />
        <h1 className={styles.h1}>Classes {lowerBound}-{upperBound}</h1>
        <div className={styles.categories}>
          {courses.map((course) => (
            <Link key={course.id} href={`/classes/${lowerBound}/${course.course_id}`} passHref>
              <div className={styles.pill}>
                  <h2>CSE {course.course_id}</h2>
                  <p>{course.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }