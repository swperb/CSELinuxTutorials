import styles from '@/styles/classes/CoursePage.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function getServerSideProps(req, res) {

    const { courseId } = req.query

    const course = await prisma.courses.findMany({
        where: {
            course_id: parseInt(courseId)
        },
        select: {
            course_id: true,
            name: true,
            description: true,
        }
    })

    const instructors = await prisma.instructors.findMany({
        where: {
            courses:{
                has: courseId
            }
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    const syllabi = await prisma.syllabi.findMany({
        where: {
            course_id: parseInt(courseId)
        },
        select: { 
            filePath: true,
            instructor_id: true,
        }
    })

    return {
        props: {
            course,
            instructors,
            syllabi,
        },
    }

}

export default function CoursePage({ course, instructors, syllabi }) {
    
    const [instructor, setInstructor] = useState([])
    const [syllabus, setSyllabus] = useState([])

    useEffect(() => {
        setInstructor(instructors[0])
        setSyllabus(syllabi[instructors[0].id])
    }, [instructors, syllabi])

    const handleInstructorChange = (e) => {
        const selectedInstructor = instructors.find(instructor => instructor.name === e.target.value)
        setInstructor(selectedInstructor)

        const selectedSyllabus = syllabi.find(syllabus => syllabus.instructor_id === selectedInstructor.id)
        setSyllabus(selectedSyllabus)
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>CSE {course[0].course_id}: {course[0].name}</h1>
            <p>{course[0].description}</p>
            <h2>Instructors</h2>
            <select onChange={handleInstructorChange}>
                {instructors.map(instructor => (
                    <option key={instructor.email} value={instructor.name}>{instructor.name}</option>
                ))}
            </select>
            <div className={styles.instructor}>
                <p>{instructor.name}</p>
                <p>{instructor.email}</p>
            </div>
            <iframe src={syllabus.filePath} width="50%" height="500px"></iframe>
        </div>
    )

}