import prismadb from "@/lib/prisma";

import { ColorForm } from "./components/color-form";

const ColorPage = async ({
    params
}: {
    params: { colorId: string }
}) => {
  let color: {
        id: string;
        name: string;
        value: string;
        storeId: string;
        createdAt: Date;
        updatedAt: Date;
    } | null = null;

    try {
        color = await prismadb.color.findUnique({
            where: {
                id: params.colorId
            },
        });
    } catch (error) {
    }

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ColorForm initialData={color} />
            </div>
        </div>
    );
}

export default ColorPage;