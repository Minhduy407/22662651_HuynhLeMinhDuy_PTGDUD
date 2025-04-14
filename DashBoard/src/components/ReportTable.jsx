import React from 'react';
import { useTable, useRowSelect } from 'react-table';
import { FaPen } from 'react-icons/fa';

// Mock data
const data = [
  {
    customerName: 'John Doe',
    customerImage: 'src/images/Avatar.png', // Đảm bảo đường dẫn đúng
    company: 'Company A',
    orderValue: '$1200',
    orderDate: '2025-04-06',
    status: 'NEW',
  },
  {
    customerName: 'Jane Smith',
    customerImage: 'src/images/Avatar (1).png', // Đảm bảo đường dẫn đúng
    company: 'Company B',
    orderValue: '$900',
    orderDate: '2025-04-05',
    status: 'IN-PROGRESS',
  },
  {
    customerName: 'Sarah Lee',
    customerImage: 'src/images/Avatar (2).png', // Đảm bảo đường dẫn đúng
    company: 'Company C',
    orderValue: '$1500',
    orderDate: '2025-04-04',
    status: 'COMPLETED',
  },
];

// Cấu hình các cột trong bảng
const columns = [
  {
    Header: ({ getToggleAllRowsSelectedProps }) => (
      <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
    ),
    id: 'selection',
    Cell: ({ row }) => (
      <input type="checkbox" {...row.getToggleRowSelectedProps()} />
    ),
  },
  {
    Header: 'Customer Name',
    accessor: 'customerName',
    Cell: ({ row }) => (
      <div className="flex items-center">
        <img
          src={row.original.customerImage}
          alt={row.original.customerName}
          className="w-8 h-8 rounded-full object-cover mr-2"
        />
        {row.original.customerName}
      </div>
    ),
  },
  {
    Header: 'Company',
    accessor: 'company',
  },
  {
    Header: 'Order Value',
    accessor: 'orderValue',
  },
  {
    Header: 'Order Date',
    accessor: 'orderDate',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }) => (
      <span
        className={`px-3 py-1 rounded-full text-white ${
          value === 'NEW'
            ? 'bg-green-500'
            : value === 'IN-PROGRESS'
            ? 'bg-yellow-500'
            : 'bg-blue-500'
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    Header: '',
    accessor: 'actions',
    Cell: () => (
      <button className="text-blue-500 hover:text-blue-700">
        <FaPen className="text-xl cursor-pointer" />
      </button>
    ),
  },
];

// Component báo cáo
export default function ReportTable() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds },
    getToggleAllRowsSelectedProps,
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Project Report</h3>
      <table {...getTableProps()} className="w-full table-auto border-collapse">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-2 px-4 text-left bg-gray-100"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="py-2 px-4">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
    