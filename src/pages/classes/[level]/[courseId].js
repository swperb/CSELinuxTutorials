import BackArrow from '@/components/backArrow/backArrow';
import EditableText from '@/components/EditableText/EditableText';
import styles from '@/styles/classes/CoursePage.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';

import { prisma } from '@/_base';

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

    const [instructor, setInstructor] = useState(instructors);
    const [syllabus, setSyllabus] = useState(null)

    const [courseData, setCourseData] = useState(course[0]);
    const [instructorData, setInstructorData] = useState(instructor[0]);

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
        setInstructorData(selectedInstructor)

        const selectedSyllabus = syllabi.find(syllabus => syllabus.instructor_id === selectedInstructor.id)
        setSyllabus(selectedSyllabus || null)
    }

    
    const handleSaveCourseData = async (fieldName, newValue) => {
        const oldValue = course[fieldName];

        setCourseData(prevCourse => ({ ...prevCourse, [fieldName]: newValue }));

        const response = await fetch('/api/classes/updateCourse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ courseId: course[0].course_id, fieldName: fieldName, newValue: newValue})
        });

        if (!response.ok) {
            setCourseData(prevCourse => ({ ...prevCourse, [fieldName]: oldValue }));
            alert('Failed to update course name.');
        }
    };

    const handleSaveInstructorData = async (fieldName, newValue) => {
        const oldValue = instructor[fieldName];

        setInstructorData(prevInstructor => ({ ...prevInstructor, [fieldName]: newValue }));

        const response = await fetch('/api/classes/updateInstructor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ instructorId: instructor.id, fieldName: fieldName, newValue: newValue})
        });

        if (!response.ok) {
            setInstructorData(prevInstructor => ({ ...prevInstructor, [fieldName]: oldValue }));
            alert('Failed to update instructor information.');
        }
    }


    return (
        <div className={styles.container}>
            <BackArrow className={styles.backArrow} />
            <div className={styles.topContainer}>
                <div className={styles.title}>

                    <h1>
                        <div className={styles.courseId}>
                            CSE {course[0].course_id}:
                        </div>
                        <EditableText text={courseData.name} className={styles.editableCourseName} onSave={(newValue) => handleSaveCourseData('name', newValue)}/>
                    </h1>
                    <div className={styles.description}>
                        <EditableText text={courseData.description} className={styles.editableDesc} onSave={(newValue) => handleSaveCourseData('description', newValue)} />
                    </div>
                
                </div>
                <div className={styles.instructor}>
                    <div className={styles.instructorHeader}>
                        
                        
                        <h1>Instructors</h1>
                        <select onChange={handleInstructorChange}>
                            {instructors.map(instructor => (
                                <option key={instructor.email} value={instructor.name}>{instructor.name}</option>
                            ))}
                        </select>
                    
                    
                    </div>

                    <div className={styles.instructorName}>
                        <EditableText text={instructorData.name} className={styles.editableInstructorName} onSave={(newValue) => handleSaveInstructorData('name', newValue)} />
                    </div>
                    
                    <div className={styles.instructorInfo}>
                        <p>Email: <a href={`mailto:${instructor.email}`}>{instructor.email}</a></p>
                        <p>Phone: <a href={`tel:${instructor.phone}`}>{instructor.phone}</a></p>
                        <p>Office Location: {instructor.officeLocation}</p>
                        <p>Office Hours: {instructor.officeHours}</p>
                    </div>
                
                
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