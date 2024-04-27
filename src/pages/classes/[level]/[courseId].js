import BackArrow from '@/components/backArrow/backArrow';
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
                has: parseInt(courseId)
            }
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            officeHours: true,
            officeLocation: true
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
    const [syllabus, setSyllabus] = useState(null)

    useEffect(() => {
        if (instructors.length > 0) {
            setInstructor(instructors[0]);
            const initialSyllabus = syllabi.find(syll => syll.instructor_id === instructors[0].id);
            setSyllabus(initialSyllabus);
        }
    }, [instructors, syllabi])

    const handleInstructorChange = (e) => {
        const selectedInstructor = instructors.find(instructor => instructor.name === e.target.value)
        setInstructor(selectedInstructor)

        const selectedSyllabus = syllabi.find(syllabus => syllabus.instructor_id === selectedInstructor.id)
        setSyllabus(selectedSyllabus || null)
    }


    return (
        <div className={styles.container}>
            <BackArrow className={styles.backArrow} />
            <div className={styles.topContainer}>
                <div className={styles.title}>
                    <h1 className={styles.h1}>CSE {course[0].course_id}: {course[0].name}</h1>
                    <p>{course[0].description}</p>
                </div>
                <div className={styles.instructor}>
                    <div className={styles.instructorHeader}>
                        <h2>Instructors</h2>
                        <select onChange={handleInstructorChange}>
                            {instructors.map(instructor => (
                                <option key={instructor.email} value={instructor.name}>{instructor.name}</option>
                            ))}
                        </select>
                    </div>
                    <p><b>{instructor.name}</b></p>
                    <p>Email: <a href={`mailto:${instructor.email}`}>{instructor.email}</a></p>
                    <p>Phone: <a href={`tel:${instructor.phone}`}>{instructor.phone}</a></p>
                </div>
            </div>
            <div className={styles.syllabusContainer}>
                {syllabus ? (
                    <iframe src={syllabus.filePath} className={styles.syllabus}></iframe>
                ) : (
                    <p>Syllabus does not exist.</p>
                )}
            </div>

            {/* <iframe src={syllabus.filePath} width="50%" height="500px"></iframe> */}
        </div>
    )

}