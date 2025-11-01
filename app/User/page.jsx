'use client'
import React, { useContext, useState, useEffect } from 'react';
import AddUserModal from '@/components/users/add-user-modal';
import AddedUserModal from '@/components/users/added-user-modal';
import DeleteUserModal from '@/components/users/delete-user-modal';
import UserTable from '@/components/users/table';

const Page = () => {
  const [users, setUsers] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);

  // get users from local storage
  const usersData = JSON.parse(localStorage.getItem('users'));
  // localStorage.setItem("users",JSON.stringify(usersData,newUser))

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('users')) || []
    setUsers(saved)
  }, [])
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])
  const handleEdit = (user) => {
    setSelectedUser(user)
    setEditModal(true)
  }
  const confirmDelete = (user) => {
    setUserToDelete(user);
    setDeleteModal(true);
  };
  const handleDeleteConfirmed = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
    setDeleteModal(false)
  };
  const handleUserUpdated = (updatedUser) => {
    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    )
    setUsers(updatedUsers)
    setEditModal(false)
  }
  return (
    <div className="p-6 bg-white  min-h-screen ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="  text-2xl font-bold  flex-1 text-[#800080]">User List</h1>
        <button className=" bg-[#800080] text-white px-4 py-2 rounded font-semibold hover:bg-[#520452] hover:text-white transition"
          onClick={() => setModalOpen(true)}
        >
          Add User
        </button>
      </div>
      {/* Table */}
      <UserTable users={users} onDelete={confirmDelete} onEdit={handleEdit} />
      {/* Add User Modal */}
      <AddUserModal modalOpen={modalOpen} setModalOpen={setModalOpen} setUsers={setUsers} />
      {/* edit user modal */}
      <AddedUserModal editOpen={editModal} setEditOpen={setEditModal} user={selectedUser} onUserUpdated={(updatedUser) => {
        setUsers((prev) =>
          prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        )
      }} />
      {/* delete user modal */}
      <DeleteUserModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} onDelete={handleDeleteConfirmed} userToDelete={userToDelete} />
    </div>
  )
}
export default Page;    