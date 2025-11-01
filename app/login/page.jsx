'use client';
import React,{useState} from 'react'

const page = () => {
  const[user,setUser]=useState("")
  return (
    <div>
      <h1>User Name:{user}</h1>
      <input type="text"
      id='text'
      name='text'
      placeholder='enter your name'
      value={user}
      onChange={(event)=>setUser(event.target.value)} />
    </div>

  )
}

export default page

// const[rowCount,setRowCount]=useState(1)
//     const addRow=()=>{
//         setRowCount(rowCount+1)
//     }
//     const removeRow=()=>{
//         if(rowCount>1){
//         setRowCount(rowCount-1)
//     }}
//   return (
//     <div>
//         {Array.from({length:rowCount},(_,index)=>
//         <div key={index}>
//             <input type="text" />
//         </div>
//         )}
//         <button onClick={addRow}>Add</button>
//          <button onClick={removeRow}>Remove</button>
      
//     </div>
//   )


    // const[userName,setUserName]=useState('')
    // return (
    //     <div>
    //         <h1>User Name:{userName}</h1>
    //         <div className='input'>
    //             <input type="text"
    //              placeholder='Enter your user name'
    //              value={userName}
    //              onChange={(state)=>setUserName(state.target.value)} />
    //         </div>
    //     </div>
    // )
    