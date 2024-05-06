import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Query not provided' });
    }

    const results = await prisma.courses.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
                {
                    description: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
            ],
        },

        orderBy: {
            course_id: 'asc',
        },
    });

    res.json(results);
}
