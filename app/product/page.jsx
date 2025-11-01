'use client'
import React, { useContext, useState,useEffect } from 'react'
import Modal from "@/components/ui/Modal";
import AddProductModal from '@/components/users/add-product-modal';
import EditProductModal from '@/components/users/edit-product-modal';
import DeleteProductModal from '@/components/users/delete-product-modal';
import ProductTable from '@/components/users/product-table';

const Page = () => {
  const [users, setUsers] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(false)
  const [deleteProduct, setDeleteProduct] = useState(false)
  const [productToDelete, setProductToDelete] = useState(null) 
  const [selectedProduct, setSelectedProduct] = useState(null);

   const usersData = JSON.parse(localStorage.getItem('users'));


    useEffect(() => {
       const saved = JSON.parse(localStorage.getItem('users')) || []
       setUsers(saved)
    }, [])
    useEffect(() => {
       localStorage.setItem('users', JSON.stringify(users))
    }, [users])

  const handleEdit = (user) => {
    setSelectedProduct(user)
    setEditProduct(true)
  }

   const confirmDelete = (user) => {
    setProductToDelete(user);
    setDeleteProduct(true);
  }
  const handelDeleteConfirmed=(id)=>{
    setUsers(prev=>prev.filter(u=>u.id!==id))
    setDeleteProduct(false)
  }
    const handleUserUpdated = (updatedUser) => {
    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    )
    setUsers(updatedUsers)
    setEditProduct(false)
  }



  return (
    <div className="p-6 bg-white min-h-screen">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold  flex-1 text-[#800080]">Product list</h1>
        <button className="bg-[#800080] text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition"
          onClick={() => setModalOpen(true)}>
          Add Product
        </button>
      </div>
      <ProductTable users={users} 
      onDelete={confirmDelete} 
      onEdit={handleEdit}
       />

      <AddProductModal modalOpen={modalOpen} setModalOpen={setModalOpen} setUsers={setUsers} />

      <EditProductModal editProduct={editProduct} setEditProduct={setEditProduct} user={selectedProduct} onProductUpdated={(updatedUser)=>{
        setUsers((prev) =>
          prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))) 
      }}/>

      <DeleteProductModal deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} onDelete={handelDeleteConfirmed} productToDelete={productToDelete} />
    </div>
  )
}
export default Page