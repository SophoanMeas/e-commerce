'use client';

import axios from "axios";
import { useState } from "react";
import { Copy, Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { ColorColumn } from "./columns";
import { Button } from "@/components/ui/button/button";
import { AlertModal } from "@/components/modals/alert-modal";
import { 
    DropdownMenu, 
    DropdownMenuTrigger,
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel  } from "@/components/ui/dropdownMenu/dropdown-menu";

interface CellActionProps {
    data: ColorColumn;
}

const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const onDelete  = async () => {
            try {
                setLoading(true);
                await axios.delete(`/api/${params.storeId}/colors/${data.id}`);
                router.refresh();
                toast.success(`${data?.name} Color deleted.`);
            } catch (error) {
            toast.error("Make sure you removed all products using this color first.")
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }
    
    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success("Color id copy to clipboard.")
    }

    return (
        <>
        <AlertModal 
          isOpen={open} 
          onClose={() => setOpen(false)}
          onConfirm={onDelete}
          loading={loading}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="mb-1">Actions</DropdownMenuLabel>
            <DropdownMenuItem className="hover:cursor-pointer"
              onClick={() => onCopy(data.id)}
            >
              <Copy className="mr-2 h-4 w-6" /> Copy Id
            </DropdownMenuItem> 
            <DropdownMenuItem className="hover:cursor-pointer"
            onClick={() => router.push(`/${params.storeId}/colors/${data.id}`)}>
              <Edit className="mr-2 h-4 w-6" /> Update
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer"
            onClick={() => setOpen(true)}>
              <Trash2 className="mr-2 h-4 w-6" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
}

export default CellAction;