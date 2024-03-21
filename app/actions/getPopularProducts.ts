import prisma from '@/app/libs/prismadb';

export default async function getPopularProducts() {
  try {
    const popularProducts = await prisma.product.findMany({
      where: {
        isPopular: true,
      },
    });

    const safePopularProducts = popularProducts.map((popularProduct) => ({
      ...popularProduct,
      createdAt: popularProduct.createdAt.toISOString(),
    }));

    return safePopularProducts;
  } catch (error: any) {
    throw new Error(error);
  }
}
