"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button/button"

export type OrderColumn = {
    id: string
    phone: string
    address: string
    isPaid: boolean,
    totalPrice: string
    products: string
    createdAt: string
    modifiedAt: string
}

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "products",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Products
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "phone",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Phone
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "address",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Address
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "totalPrice",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Price
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "isPaid",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Paid
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
]
