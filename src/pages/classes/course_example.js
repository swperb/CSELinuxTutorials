import React, { useState } from "react";
import { useRouter } from "next/router";
import CourseDetails from "@/components/courses/CourseDetails";
import SyllabusViewer from "@/components/courses/Syllabus";
import InstructorSelector from "@/components/courses/InstructorSelect";
import InstructorInfo from "@/components/courses/InstructorInfo";

import styles from "@/styles/classes/CoursePage.module.css";

import courses from "@/data/courses.json";
import instructors from "@/data/instructors.json";



const CoursePage = () => {
    const router = useRouter();
    const { courseId } = router.query;
    

    if (typeof courseId === "undefined") {
        return <div>Loading...</div>
    }

    const course = courses.find(c => c.id === courseId);


    const courseInstructors = instructors.filter(instructor => instructor.courses.some(course => course.courseId === courseId));
    const [currentInstructor, setCurrentInstructor] = useState(courseInstructors[0]);

    const handleInstructorSelect = (instructorId) => {
        const newInstructor = courseInstructors.find(instructor => instructor.id.toString() === instructorId);
        setCurrentInstructor(newInstructor);
    };

    const courseDetails = currentInstructor.courses.find(course => course.courseId === courseId);
    
    return (
        <div className={styles.container}>
            <div className={styles.courseDetails}>
                <CourseDetails id={course.id} title={course.name} description={course.description} />
            </div>
            <div className={styles.instructor}>
                <InstructorSelector 
                    instructors={courseInstructors} 
                    onSelect={handleInstructorSelect} 
                />
                <InstructorInfo instructor={currentInstructor} />
            </div>
            <div className={styles.syllabus}>
                <SyllabusViewer syllabusLink={courseDetails.syllabus} />
            </div>
        </div>
    );
};

export default CoursePage;