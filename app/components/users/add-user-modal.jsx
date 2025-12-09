import Modal from "../ui/Modal"
import React, { useState } from 'react'
const AddUserModal = ({ modalOpen, setModalOpen,setUsers }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({})
    const validate = () => {
        const newErrors = {}
        if (!formData.fullName.trim()) newErrors.fullName = "Fullname is required"
        if (!formData.userName.trim()) newErrors.userName = "Username is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
        // if (!formData.phone.trim()) newErrors.phone = "Phone is required"
        if (!/^\d{13}$/.test(formData.phone)) newErrors.phone = "Phone must be 12 digits";
        if (!formData.password) newErrors.password = "Password is required"
        if (!formData.confirmPassword){newErrors.confirmPassword="ConfirmPassword is required"}
        else if (formData.password !== formData.confirmPassword){ newErrors.confirmPassword = "Password  does not match"}  
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }
        const handleSubmit = (e) => {
            e.preventDefault()
            if (!validate()) return;
            const newUser = {
                id: Date.now(),
                fullName: formData.fullName,
                userName: formData.userName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            }
          const users=JSON.parse(localStorage.getItem("users")) || [];
     const updatedUsers=[...users,newUser]
     localStorage.setItem("users",JSON.stringify(updatedUsers));
     setUsers(updatedUsers)

            setFormData({
                fullName: "",
                userName: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: ""
            })
            setModalOpen(false)
        }
    return (
        <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title=""
        >
            <div className='flex justify-center items-center flex-col bg-white px-5 py-10 w-full'>
                <h1 className='text-black mb-[35px] text-center font-semibold text-2xl'>Create User</h1>
                <form className='grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[25px]'
                    onSubmit={handleSubmit}>
                    <div
                        className='flex flex-col'>
                        <label
                            className='font-semibold mb-1.5 text-black'>Full Name</label>
                        <input
                            className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
                            type="text"
                            placeholder="Enter your Name"
                            value={formData.fullName}
                            onChange={(event) => {setFormData({ ...formData, fullName: event.target.value })
                            if (errors.fullName){
                                setErrors(prev=>({...prev,fullName:""}))
                            }
                        }}
                             /> 
                        {errors.fullName && <ErrorMessage errors={errors.fullName} />}
                    </div>
                    <div
                        className='flex flex-col'>
                        <label
                            className='font-semibold mb-1.5 text-black'>Username</label>
                        <input
                            className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
                            type="text"
                            placeholder="Enter your User Name"
                            value={formData.userName}
                            onChange={(event) =>{ setFormData({ ...formData, userName: event.target.value })
                            if(errors.userName){
                                setErrors(prev=>({...prev,userName:""}))
                            }
                            }} />
                        {errors.userName && <ErrorMessage errors={errors.userName} />}
                    </div>
                    <div
                        className='flex flex-col'>
                        <label
                            className='font-semibold mb-1.5 text-black'>Email</label>
                        <input
                            className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(event) => {setFormData({ ...formData, email: event.target.value })
                            if(errors.email){
                                setErrors(prev=>({...prev,email:""}))
                            }
                        }}
                            />
                        {errors.email && <ErrorMessage errors={errors.email} />}
                    </div>
                    <div
                        className='flex flex-col'>
                        <label
                            className='font-semibold mb-1.5 text-black'>Phone Number</label>
                        <input
                            className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
                            type="number"
                            placeholder="Enter your number"
                            value={formData.phone}
                            onChange={(event) => {setFormData({ ...formData, phone: event.target.value })
                            if(errors.phone){
                             setErrors(prev=>({...prev,phone:""}))   
                            }
                            }} />
                        {errors.phone && <ErrorMessage errors={errors.phone} />}
                    </div>
                    <div
                        className='flex flex-col'>
                        <label
                            className='font-semibold mb-1.5 text-black'>Password</label>
                        <input
                            className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
                            type="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(event) => {setFormData({ ...formData, password: event.target.value })
                            if(errors.password){
                                setErrors(prev=>({...prev,password:""}))
                            }
                            
                            }} />
                        {errors.password && <ErrorMessage errors={errors.password} />}
                    </div>
                    <div
                        className='flex flex-col'>
                        <label
                            className='font-semibold mb-1.5 text-black'>Confirm Password</label>
                        <input
                            className='rounded-xl px-2.5 py-3 border border-[#ccc] text-[15px] placeholder:text-[#aaa]'
                            type="password"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(event) =>{ setFormData({ ...formData, confirmPassword: event.target.value })
                            if(errors.confirmPassword){
                                setErrors(prev=>({...prev,confirmPassword:""}))                          
                            }}} />
                        {errors.confirmPassword && <ErrorMessage errors={errors.confirmPassword} />}
                    </div>
                    <div
                        className='col-span-full text-center mt-[30px]'>
                        <button
                            className='bg-black text-white px-6 py-2 rounded cursor-pointer font-semibold hover:bg-gray-900 hover:text-white transition'
                            type='submit'>
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
export default AddUserModal

const ErrorMessage = ({ errors }) => {
    return (
        <p className='text-red-500'>{errors}</p>
    )
}