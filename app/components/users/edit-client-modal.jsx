import React,{useState,useEffect} from 'react'
import Modal from '../ui/Modal'

const EditClientModal = ({editClient,setEditClient,user,onUserUpdated}) => {

   const [formData,setFormData] = useState({
      id: '',
      fullName: '',
      userName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    })
  
    const [errors, setErrors] = useState({})
    useEffect(() => {
      if (user) {
        setFormData(user)
      }
    }, [user])
     const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Fullname is required'
    if (!formData.userName.trim()) newErrors.userName = 'Username is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.password) newErrors.password = 'Password is required'
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const updatedUser = { ...formData }
    const users = JSON.parse(localStorage.getItem('users')) || []
    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    )
    localStorage.setItem('users', JSON.stringify(updatedUsers))

    if (onUserUpdated) onUserUpdated(updatedUser)
    setEditClient(false)
  }
  return (
      <Modal
        isOpen={editClient}
        onClose={() => setEditClient(false)}
        title =""
      >
  <div className='flex justify-center items-center flex-col bg-white px-5 py-10 w-full'>
    <h1 className='text-black mb-[35px] text-center font-semibold text-2xl'>Edit Client</h1>
    
    <form className='grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[25px]' onSubmit={handleSubmit }>
      <div className='flex flex-col'>
        <label className='font-semibold mb-1.5 text-black'>Full Name</label>
        <input className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
         type="text"
          placeholder="Enter your name"
          value={formData.fullName}
          onChange={(event)=>setFormData({...formData,fullName:event.target.value})}
            />
            {errors.fullName &&<ErrorMessage errors={errors.fullName}/>}
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold mb-1.5 text-black'>Username</label>
        <input className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
         type="text"
          placeholder="Enter your username"
          value={formData.userName}
          onChange={(event)=>setFormData({...formData,userName:event.target.value})}
           />
           {errors.userName &&<ErrorMessage errors={errors.userName}/>}
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold mb-1.5 text-black'>Email</label>
        <input className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
         type="email"
          placeholder="Enter your email"
          value={ formData.email}
          onChange={ (event)=>setFormData({...formData,email:event.target.value})}
         />
         {errors.email &&<ErrorMessage errors={errors.email}/>}
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold mb-1.5 text-black'>Phone Number</label>
        <input className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
         type="number"
          placeholder="Enter your number"
          value={ formData.phone}
          onChange={ (event)=>setFormData({...formData,phone:event.target.value})}
           />
           {errors.phone &&<ErrorMessage errors={errors.phone}/>}
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold mb-1.5 text-black'>Password</label>
        <input className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
         type="password"
          placeholder="Enter your password"
          value={ formData.password}
          onChange={ (event)=>setFormData({...formData,password:event.target.value})}
           />
           {errors.password &&<ErrorMessage errors={errors.password}/>}
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold mb-1.5 text-black'>Confirm Password</label>
        <input className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
         type="password" 
         placeholder="Confirm your password"
         value={ formData.confirmPassword}
         onChange={ (event)=>setFormData({...formData,confirmPassword:event.target.value})}  />
         { errors.confirmPassword &&<ErrorMessage errors={errors.confirmPassword}/>}
      </div>
      <div className='col-span-full text-center mt-[30px]'>
        <button className='bg-black text-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-black border border-black transition' type='submit'>
          Update
        </button>
      </div>
    </form>
  </div>

      </Modal>
  )
}

export default EditClientModal

const ErrorMessage = ({ errors }) => {
  return <p className="text-red-500 text-sm mt-1">{errors}</p>
}
