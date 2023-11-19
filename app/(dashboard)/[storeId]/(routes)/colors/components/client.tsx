'use client';

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button/button";
import { Heading } from "@/components/ui/heading/heading";
import { Separator } from "@/components/ui/separator/separator";
import { ColorColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/dataTable/data-table";
import { ApiList } from "@/components/ui/api-list/api-list";

interface ColorClientProps {
    data: ColorColumn[]
}

export const ColorColumnClient: React.FC<ColorClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Colors (${data.length})`}
                    description="Mange colors for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
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
            description="API calls for Colors"
            />
            <ApiList entityName="colors" entityIdName="colorId"/>
        </>
    )
}