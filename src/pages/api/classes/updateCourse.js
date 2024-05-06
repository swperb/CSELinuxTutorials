// pages/api/updateCourse.js
import { prisma } from '@/_base';

export default async function handler(req, res) {
    const { courseId, fieldName, newValue } = req.body;

    const updatedCourse = await prisma.courses.update({
        where: { course_id: courseId },
        data: { [fieldName]: newValue }
    });

    res.json(updatedCourse);
}
