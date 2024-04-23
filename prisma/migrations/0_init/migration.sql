-- CreateTable
CREATE TABLE "courses" (
    "id" BIGSERIAL NOT NULL,
    "course_id" DECIMAL NOT NULL,
    "name" TEXT,
    "description" TEXT,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instructors" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "officeHours" TEXT[],
    "officeLocation" TEXT,
    "phone" TEXT,
    "courses" TEXT[],

    CONSTRAINT "instructors_pkey" PRIMARY KEY ("id")
);

