import prismadb from "@/lib/prisma";

import { SizeForm } from "./components/size-form";

const SizePage = async ({
    params
}: {
    params: { sizeId: string }
}) => {
  let size: {
        id: string;
        name: string;
        value: string;
        storeId: string;
        createdAt: Date;
        updatedAt: Date;
    } | null = null;

    try {
        size = await prismadb.size.findUnique({
            where: {
                id: params.sizeId
            },
        });
    } catch (error) {
    }

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SizeForm initialData={size} />
            </div>
        </div>
    );
}

export default SizePage;