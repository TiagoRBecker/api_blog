import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const CategoriesService = {
  findCategories: async () => {
    return await prisma.categories.findMany({
      include: {
        posts: true,
      },
    });
  },
  findCategoriesById: async (id: string) => {
    return await prisma.categories.findMany({
      where: {
        id: Number(id),
      },
      include: {
        posts: true,
      },
    });
  },
  createCategory: async (name: string, url: string) => {
    return await prisma.categories.create({
      data: {
        name: name,
        url: url,
      },
    });
  },
  updateCategory: async (id: string, name: string) => {
    return await prisma.categories.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
      },
    });
  },
};
