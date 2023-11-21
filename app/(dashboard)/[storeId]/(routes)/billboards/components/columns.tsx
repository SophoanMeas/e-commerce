"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button/button"
import CellAction from "./cell-action"

export type BillboardColumn = {
    id: string
    label: string
    createdAt: string
    modifiedAt: string
}

export const columns: ColumnDef<BillboardColumn>[] = [
    {
        accessorKey: "label",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Label
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => {
            return (
                <Button
                    className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Created At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "modifiedAt",
        header: ({ column }) => {
            return (
                <Button
                    className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Modified At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>

            )
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    }
]
