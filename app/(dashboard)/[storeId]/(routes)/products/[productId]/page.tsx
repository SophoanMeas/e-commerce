import prismadb from "@/lib/prisma";

import { ProductForm } from "./components/product-form";

const ProductPage = async ({
    params
}: {
    params: { productId: string, storeId: string }
}) => {
    let product: {
        id: string;
        name: string;
        price: number;
        images: {
        id: string;
        url: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
        isFeatured: boolean;
        isArchived: boolean;
        sizeId: string;
        storeId: string;
        colorId: string;
        categoryId: string;
        createdAt: Date;
        updatedAt: Date;
    } | null = null;

    try {
        product = await prismadb.product.findUniqueOrThrow({
            where: {
                id: params.productId
            },
            include: {
                images: true
            }
        });
    } catch (error) {
    }
  

    const categories = await prismadb.category.findMany({
        where: {
            storeId: params.storeId
        }
    })

    const sizes = await prismadb.size.findMany({
        where: {
            storeId: params.storeId
        }
    })

    const colors = await prismadb.color.findMany({
        where: {
            storeId: params.storeId
        }
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm 
                categories={categories}
                sizes={sizes}
                colors={colors}
                initialData={product} />
            </div>
        </div>
    );
}

export default ProductPage;