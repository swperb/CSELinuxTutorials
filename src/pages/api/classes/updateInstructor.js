// pages/api/updateCourse.js
import { prisma } from '@/_base';

export default async function handler(req, res) {
    const { instructorId, fieldName, newValue } = req.body;

    const updatedCourse = await prisma.instructors.update({
        where: { id: instructorId },
        data: { [fieldName]: newValue }
    });

    res.json(updatedCourse);
}
