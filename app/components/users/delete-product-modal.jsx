import React from 'react'
import Modal from '../ui/Modal'

const DeleteUserModal = ({deleteProduct,setDeleteProduct,onDelete,productToDelete}) => {
  return (
     <Modal
        isOpen={deleteProduct}
        onClose={() => setDeleteProduct(false)}
        title =""
      >
      <p className='text-center font-bold text-[19px]  '>Are you sure to delete this product ?</p>
      <div className='flex justify-evenly'>
      <div className='flex  mt-2.5 gap-2 '>
         <button className=' bg-black text-white px-2 py-1 rounded font-semibold hover:bg-gray-300 hover:text-black border border-black transition' type='submit
         ' onClick={() => setDeleteProduct(false)}>
          Cancel
        </button>
        <button className=' bg-red-600 text-white px-2 py-1 rounded font-semibold hover:bg-red-400 hover:text-black border border-black transition' type='submit'
          onClick={() => {
          if(productToDelete){
            onDelete(productToDelete.id);      
          }}}>
          Delete
        </button>
         </div>
       </div>
</Modal>
  )
}

export default DeleteUserModal
