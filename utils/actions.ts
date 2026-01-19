import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const fetchFeaturedProduct = async () => {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });

  return products;
};

export const fetchAllProducts = async ({ search }: { search: string }) => {
  return prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        {
          company: { contains: search, mode: "insensitive" },
        },
      ],
    },
    orderBy: {
      createAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  console.log(productId);
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  if (!product) {
    redirect("/products");
  }

  return product;
};
