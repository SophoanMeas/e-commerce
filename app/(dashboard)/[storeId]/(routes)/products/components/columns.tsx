"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button/button"
import { CellAction } from "./cell-action"

export type ProductColumn = {
    id: string
    name: string
    price: string
    size: string
    category: string
    color: string
    isFeatured: boolean
    isArchived: boolean
    createdAt: string
    modifiedAt: string
}

export const columns: ColumnDef<ProductColumn>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "isFeatured",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Featured
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "isArchived",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Archived
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "category",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Category
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "size",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Size
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "color",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Color
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="flex items-center gap-x-2">
                {row.original.color}
                <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.color }} />
            </div>
        )
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
