"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import Link from "next/link";
import { type formResponse } from "@/types/common";

export const columns: ColumnDef<formResponse>[] = [
  {
    accessorKey: "Name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
        className="text-left text-sm font-semibold text-foreground"
      />
    ),
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-sm font-medium">
        {row.original.name}
      </div>
    ),
    filterFn: (row, id, filterValue) => {
      const name = row.original.name.toLowerCase();
      return name.includes(filterValue as string);
    },
    sortingFn: (rowA, rowB) => {
      const valueA = rowA.original.name;
      const valueB = rowB.original.name;
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    },
  },
  {
    id: "action",
    header: () => (
      <div className="text-sm font-semibold text-foreground">Action</div>
    ),
    cell: ({ row }) => (
      <Link
        href={`/view?id=${row.original.ID}`}
        className="whitespace-nowrap text-center text-sm font-medium"
      >
        View Details
      </Link>
    ),
  },
];
