// components/TransactionsTableSkeleton.tsx

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TransactionsTableSkeleton = () => {
    return (
        <Table>
            <TableHeader className="bg-[#f9fafb]">
                <TableRow>
                    {["Transaction", "Amount", "Status", "Date", "Channel", "Category"].map((heading) => (
                        <TableHead key={heading} className="px-2">
                            {heading}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {Array.from({ length: 10 }).map((_, i) => (
                    <TableRow key={i} className="bg-white animate-pulse border-b border-gray-100">
                        <TableCell className="px-2">
                            <div className="h-4 w-32 bg-gray-200 rounded" />
                        </TableCell>
                        <TableCell className="px-2">
                            <div className="h-4 w-20 bg-gray-200 rounded" />
                        </TableCell>
                        <TableCell className="px-2">
                            <div className="h-4 w-16 bg-gray-200 rounded-full" />
                        </TableCell>
                        <TableCell className="px-2">
                            <div className="h-4 w-28 bg-gray-200 rounded" />
                        </TableCell>
                        <TableCell className="px-2 max-md:hidden">
                            <div className="h-4 w-20 bg-gray-200 rounded" />
                        </TableCell>
                        <TableCell className="px-2 max-md:hidden">
                            <div className="h-4 w-24 bg-gray-200 rounded" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TransactionsTableSkeleton;
