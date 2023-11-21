'use client';

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import { Heading } from "@/components/ui/heading/heading";
import { Separator } from "@/components/ui/separator/separator";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/dataTable/data-table";
import { ApiList } from "@/components/ui/api-list/api-list";

interface ProductClientProps {
    data: ProductColumn[]
}

export const ProductClient: React.FC<ProductClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Products (${data.length})`}
                    description="Mange products for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable 
            columns={columns}
            data={data}
            searchKey="name"
            />
            <Heading 
            title="API"
            description="API calls for Products"
            />
            <ApiList entityName="products" entityIdName="productId"/>
        </>
    )
}