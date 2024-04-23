const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function getServerSideProps() {
  const courses = await prisma.courses.findMany({
    where: {
      course_id: {
        gte: 1000,
        lte: 3999,
      },
    },

    select: {
      name: true,
      description: true,
    },


  })

  return {
    props: {
      courses,
    },
  }
}



export default function Courses({ courses }) {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}: {course.description}</li>
        ))}
      </ul>
    </div>
  )
}
