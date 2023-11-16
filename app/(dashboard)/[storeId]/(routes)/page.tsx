import prismadb from "@/lib/prisma";

interface DashboardPageProps {
    params: { storeId: string }
}

const DashBoardPage: React.FC<DashboardPageProps> = async ({
    params
}) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    })

    return (
        <div className="">Active store:{store?.name}</div>
    )
}

export default DashBoardPage;