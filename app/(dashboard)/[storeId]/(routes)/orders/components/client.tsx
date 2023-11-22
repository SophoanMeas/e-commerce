'use client';

import { useParams, useRouter } from "next/navigation";

import { Heading } from "@/components/ui/heading/heading";
import { Separator } from "@/components/ui/separator/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/dataTable/data-table";

interface OrderClientProps {
    data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Mange orders for your store"
            />
            <Separator />
            <DataTable
                columns={columns}
                data={data}
                searchKey="products"
            />
        </>
    )
}