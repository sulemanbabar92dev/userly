'use client'
import React, { useState,useEffect   } from 'react'
import AddClientModal from '@/components/users/add-client-modal'
import EditClientModal from '@/components/users/edit-client-modal'
import DeleteClientModal from '@/components/users/delete-client-modal'
import ClientTable from '@/components/users/client-table'

const Page = () => {

  const [users, setUsers] = useState([])
  const[openModal,setOpenModal]=useState(false)
    const[editClient,setEditClient]=useState(false)
    const[deleteClient,setDeleteClient]=useState(false)
    const[clientToDelete,setClientToDelete]=useState(null)
    const[selectedClients,setSelectedClients]=useState(null)
  //  const usersData = JSON.parse(localStorage.getItem('users'));
     useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('users')) || []
      setUsers(saved)
    }, [])
    useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users))
    }, [users])
     const handleEdit = (user) => {
    setSelectedClients(user)
    setEditClient(true)
  }
  const confirmDelete = (user) => {
    setClientToDelete(user);
    setDeleteClient(true);
  }
  const handelDeleteConfirmed=(id)=>{
    setUsers(prev=>prev.filter(u=>u.id!==id))
    setDeleteClient(false)
  }
   const handleUserUpdated = (updatedUser) => {
    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    )
    setUsers(updatedUsers)
    setEditClient(false)
  }

 
  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
         <h1 className="  text-2xl font-bold   text-[#800080]">Client List</h1>  
          <button className="bg-[#800080] text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition"
          onClick={()=>setOpenModal(true)}>
            Add Client
          </button>
      </div>
      {/* table */}
     <ClientTable users={users} onDelete={confirmDelete}
      onEdit={handleEdit} 
      />
      {/* add client */}
      <AddClientModal openModal={openModal} setOpenModal={setOpenModal} setUsers={setUsers}/>
      {/* edit client */}
      <EditClientModal editClient={editClient} setEditClient={setEditClient} user={selectedClients} onUserUpdated={(updatedUser) =>{
         setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    )
      }} />
      {/* delete client */}
      <DeleteClientModal deleteClient={deleteClient} setDeleteClient={setDeleteClient} clientToDelete={clientToDelete} onDelete={handelDeleteConfirmed}/>
    </div>
  )
}
export default Page