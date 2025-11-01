import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
const TableProduct = ({users, onDelete, onEdit}) => {
  return (
    <div>
          <div className="overflow-x-auto bg-white-500 rounded shadow-md">
        <table className="w-full  border-collapse text-black">
          <thead>
            <tr className="bg-[#800080] text-white">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Password</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
              {/* empty data message */}
          {users?.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-5 text-center">
                No data available
              </td>
            </tr>
          ):(
            users.map(user => (
              <tr key={user.id} className="hover:bg-gray-300">
                <td className="px-4 py-5">{user.id}</td>
                <td className="px-4 py-2">{user.fullName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2">{user.password}</td>
                <td className="flex px-4 py-5 gap-3">
                <RiDeleteBin5Line onClick={() =>onDelete(user)} className='text-red-500 text-[20px] hover:text-red-700' />
                 <MdEdit onClick={() => onEdit(user)}  className='text-black text-[20px] hover:text-gray-700' />
                </td>
              </tr>
            ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default TableProduct
