/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tecnology` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectToTecnology` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToProject" DROP CONSTRAINT "_CategoryToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToProject" DROP CONSTRAINT "_CategoryToProject_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToTecnology" DROP CONSTRAINT "_ProjectToTecnology_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToTecnology" DROP CONSTRAINT "_ProjectToTecnology_B_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "Tecnology";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_CategoryToProject";

-- DropTable
DROP TABLE "_ProjectToTecnology";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "url" TEXT,
    "images" TEXT[],
    "priority" INTEGER NOT NULL DEFAULT 0,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnologies" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "image" TEXT,

    CONSTRAINT "tecnologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_projectsTotecnologies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_categoriesToprojects" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_projectsTotecnologies_AB_unique" ON "_projectsTotecnologies"("A", "B");

-- CreateIndex
CREATE INDEX "_projectsTotecnologies_B_index" ON "_projectsTotecnologies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_categoriesToprojects_AB_unique" ON "_categoriesToprojects"("A", "B");

-- CreateIndex
CREATE INDEX "_categoriesToprojects_B_index" ON "_categoriesToprojects"("B");

-- AddForeignKey
ALTER TABLE "_projectsTotecnologies" ADD CONSTRAINT "_projectsTotecnologies_A_fkey" FOREIGN KEY ("A") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_projectsTotecnologies" ADD CONSTRAINT "_projectsTotecnologies_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_categoriesToprojects" ADD CONSTRAINT "_categoriesToprojects_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_categoriesToprojects" ADD CONSTRAINT "_categoriesToprojects_B_fkey" FOREIGN KEY ("B") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
