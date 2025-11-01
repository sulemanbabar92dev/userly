import React from 'react'

const page = () => {
  return (
      <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <Link href="/Dashboard">
          <button className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition"
          >
            Go Back
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-center flex-1 text-black">User List</h1>
        {/* <Link href="/User/userdata"> */}
        {/* <Link href={"/User/page"}> */}
        <button className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition"
          onClick={() => setModalOpen(true)}
        >
          Add User
        </button>
        {/* </Link> */}
        {/* </Link> */}
      </div>
      {/* Table */}
      <div className="overflow-x-auto bg-white-500 rounded shadow-md">
        <table className="w-full  border-collapse text-black">
          <thead>
            <tr className="bg-black text-white">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Password</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-300">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2">{user.password}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    // onClick={() => deleteUser(user.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded font-semibold hover:bg-red-700 transition"
                     onClick={() => setDeleteModal(true)}
                  >
                    Delete
                  </button>
                  {/* <Link href="/User/userdata/edit"> */}
                    <button className="bg-black text-white px-3 py-1 rounded font-semibold hover:bg-white hover:text-black transition"
                    onClick={() => setEditModal(true)}>
                      Edit
                    </button>
                  {/* </Link> */}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default page


  // <Link href="/User">
  //           <div
  //             className={`flex items-center  space-x-2 py-3 pl-5 rounded-[6px] cursor-pointer text-[18px] mb-[15px]  transition-colors duration-300 ease-in-out ${isActive("/User") ? "bg-white text-black" : " hover:bg-white hover:text-[#000000]"
  //               }`}
  //           >
  //             <FaUser className="text-[24px]" />
  //             <span>User</span>
  //           </div>
  //         </Link>
  //         <Link href="/Clients">
  //           <div
  //             className={`flex items-center  space-x-2  py-3 pl-5 rounded-[6px] cursor-pointer text-[15px] mb-[15px]  transition-colors duration-300 ease-in-out ${isActive("/Clients") ? "bg-white text-black" : " hover:bg-white hover:text-[#000000]"
  //               }`}>
  //             <FaUserFriends className="text-[24px]" />
  //             <span>Clients</span>
  //           </div>
  //         </Link>
  //         <Link href="/Product">
  //           <div
  //             className={`flex items-center  py-3 pl-5 space-x-2 p-1 rounded-[6px] cursor-pointer text-[15px] mb-[15px]  transition-colors duration-300 ease-in-out ${isActive("/Product") ? "bg-white text-black" : " hover:bg-white hover:text-[#000000]"
  //               }`}>

  //             <FaBox className="text-[24px]" />
  //             <span>Product</span>
  //           </div>
  //         </Link> 