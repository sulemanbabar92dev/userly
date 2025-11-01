import React from 'react'
import Modal from '../ui/Modal'

const DeleteUserModal = ({deleteModal, setDeleteModal,onDelete,userToDelete}) => {
  return (
     <Modal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        title =""
      >
      <p className='text-center text-[19px] font-bold'>Are you sure to delete this User ?</p>
      <div className='flex justify-evenly'>
      <div className='flex  mt-2.5 gap-2.5'>
         <button className=' bg-black text-white  px-2 py-1 rounded font-semibold hover:bg-gray-300 hover:text-black transition' type='submit'
         onClick={() => setDeleteModal(false)}>
          Cancel  
        </button>
        <button  className=' bg-red-600 text-white px-2 py-1 rounded font-semibold hover:bg-red-400 hover:text-black  transition' type='submit'
         onClick={() => {
          if(userToDelete){
            onDelete(userToDelete.id);      
          }}}>
          Delete
        </button>
         </div>
       </div>
</Modal>
  )
}
 export default DeleteUserModal
