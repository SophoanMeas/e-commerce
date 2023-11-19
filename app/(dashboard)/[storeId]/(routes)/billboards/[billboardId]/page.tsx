import prismadb from "@/lib/prisma";

import { BillboardForm } from "./components/billboard-form";

const BillboardPage = async ({
    params
}: {
    params: { billboardId: string }
}) => {
  let billboards: {
        id: string;
        storeId: string;
        label: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    } | null = null;

    try {
        billboards = await prismadb.billboard.findUnique({
            where: {
                id: params.billboardId
            },
        });
    } catch (error) {
    }

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardForm initialData={billboards} />
            </div>
        </div>
    );
}

export default BillboardPage;