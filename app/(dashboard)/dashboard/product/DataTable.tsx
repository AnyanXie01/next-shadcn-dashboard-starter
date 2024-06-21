'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const data: Payment[] = [
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
  {
    id: 1,
    price: 49.9,
    color: "Black",
    rating: 5.0,
    num_votes: 32,
    inventory: 96,
    product_name: "Men Grey Hoodie",
    product_type: "Hoodies",
    product_image: "https://picsum.photos/300/300"
  },
];

type Payment = {
  id: number;
  price: number
  color: string
  rating: number
  num_votes: number
  inventory: number
  product_name: string
  product_type: string
  product_image: string
};

const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'product_name',
    header: 'Product',
    cell: ({ row }) => {
      const imageLink = row.original.product_image
      return (
      <div className="image-align">
        <img src={imageLink} alt={row.getValue('product_name')} className="product-image" />
        <div className="product-info">
          <span className="product-name">{row.getValue('product_name')}</span>
          <span className="product-category">{row.original.product_type}</span>
        </div>
      </div>
      )
    }
  },
  {
    accessorKey: 'inventory',
    header: () => <div>Inventory</div>,
    cell: ({ row }) => {
      const inventory = row.getValue('inventory') as number;
      return (
        <div className="capitalize">
          {inventory > 0 ? `${inventory} In Stock` : 'Out of stock'}
        </div>
      )
    }
  },
  {
    accessorKey: 'color',
    header: 'Color',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('color')}</div>
    )
  },
  {
    accessorKey: 'price',
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('price'));
      const formatted_price = price.toFixed(2);

      return <div className="text-right font-medium">{`$${formatted_price}`}</div>;
    }
  },
  {
    accessorKey: 'rating',
    header: () => <div className="text-right">Rating</div>,
    cell: ({ row }) => {
      const rating = parseFloat(row.getValue('rating'));
      const numVote = row.original.num_votes as number;
      const formatted_rating = rating.toFixed(1);
      return <div className="text-right font-medium">{`${formatted_rating} (${numVote} votes)`}</div>;
    }
  },
];

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full px-4">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="ml-auto">
                Filter <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            placeholder="Search..."
            value={(table.getColumn('Product')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('Product')?.setFilterValue(event.target.value)
            }
            className="w-96"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#142ef0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
            </svg>
          </Button>
          <Button variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#142ef0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} Results
        </div>
        <div className="space-x-2">
          <Pagination>
          <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          {table.getPageOptions().map((option, i) => (
            <h1 key={i}>
              <PaginationLink
                onClick={() => table.setPageIndex(option)}
                aria-disabled={option === table.getState().pagination.pageIndex}
              >
                {option + 1}
              </PaginationLink>
            </h1>
          ))}
          <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
