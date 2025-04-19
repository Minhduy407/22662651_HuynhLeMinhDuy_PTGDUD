import React, { useEffect, useState } from 'react';
import { useTable, usePagination, useRowSelect } from 'react-table';
import { FaPen } from 'react-icons/fa';
import AddUserModal from './AddUserModal';
import EditUserModal from './EditUserModal';

export default function ReportTable() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch('https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/id')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  const handleAddUser = (newUser) => {
    setData(prev => [...prev, newUser]);
  };

  const handleEditUser = async (updatedUser) => {
    const res = await fetch(
      `https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/id/${updatedUser.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser),
      }
    );
    const updated = await res.json();
    setData(prev => prev.map(user => (user.id === updated.id ? updated : user)));
    setEditingUser(null);
  };

  const columns = React.useMemo(() => [
    {
      Header: ({ getToggleAllPageRowsSelectedProps }) => (
        <input type="checkbox" {...getToggleAllPageRowsSelectedProps()} />
      ),
      id: 'selection',
      Cell: ({ row }) => (
        <input type="checkbox" {...row.getToggleRowSelectedProps()} />
      ),
    },
    {
      Header: 'Customer Name',
      accessor: 'Name',
      Cell: ({ row }) => (
        <div className="flex items-center">
          <img
            src={
              row.original.avatar?.startsWith('http')
                ? row.original.avatar
                : `src/images/${row.original.avatar}`
            }
            alt={row.original.Name}
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          {row.original.Name}
        </div>
      ),
    },
    {
      Header: 'Company',
      accessor: 'Company',
    },
    {
      Header: 'Order Value',
      accessor: 'Ordervalue',
    },
    {
      Header: 'Order Date',
      accessor: 'date',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => {
        const statusColor = {
          new: 'bg-blue-200 text-blue-600',
          'in-progress': 'bg-yellow-200 text-yellow-600',
          completed: 'bg-green-200 text-green-600',
        }[value] || 'bg-gray-200 text-gray-600';
        return (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        );
      },
    },
    {
      Header: '',
      accessor: 'actions',
      Cell: ({ row }) => (
        <button
          onClick={() => setEditingUser(row.original)}
          className="text-gray-500 hover:text-gray-800"
        >
          <FaPen className="text-lg cursor-pointer" />
        </button>
      ),
    },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageCount,
    gotoPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 6 },
    },
    usePagination,
    useRowSelect
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Detailed report</h3>
        <button
          onClick={() => setShowModal(true)}
          className="border px-4 py-1 rounded text-pink-600 border-pink-300 hover:bg-pink-100"
        >
          ➕ Add
        </button>
      </div>

      <table {...getTableProps()} className="w-full table-auto border-collapse">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="py-2 px-4 text-left bg-gray-100 font-medium text-sm text-gray-600"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b hover:bg-gray-50">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="py-2 px-4 text-sm text-gray-700">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-600">{data.length} results</span>
        <div className="flex items-center space-x-2">
          <button onClick={() => previousPage()} disabled={!canPreviousPage} className="px-3 py-1 rounded-full border border-gray-300 text-sm disabled:opacity-40">◀</button>
          {[...Array(pageCount)].map((_, i) => (
            <button
              key={i}
              onClick={() => gotoPage(i)}
              className={`px-3 py-1 rounded-full border text-sm ${pageIndex === i ? 'bg-pink-500 text-white border-pink-500' : 'border-gray-300 text-gray-600'}`}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => nextPage()} disabled={!canNextPage} className="px-3 py-1 rounded-full border border-gray-300 text-sm disabled:opacity-40">▶</button>
        </div>
      </div>

      {showModal && <AddUserModal onClose={() => setShowModal(false)} onAdd={handleAddUser} />}
      {editingUser && <EditUserModal user={editingUser} onClose={() => setEditingUser(null)} onSave={handleEditUser} />}
    </div>
  );
}