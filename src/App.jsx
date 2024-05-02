import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import {logOut,login} from "./Features/AuthSlice"
import authService from "./Appwrite/Auth"
import Header from "./Components/Header/Header"
import { Outlet } from "react-router-dom"
import {Toaster} from 'react-hot-toast'

function App() {
  const[loading,setLoading]=useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=> {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logOut())
      }
    })
    .finally(()=> setLoading(false))
  },[])
  

  return !loading ? (
  <div 
  style={{ fontFamily: '"Share Tech Mono", monospace', fontWeight: 400, fontStyle: 'normal' }}
  className='min-h-screen flex flex-wrap '>
   <Toaster
  position="top-center"
  reverseOrder={false}
/>
<div className='w-full m-2 p-2'>

  <Header/>
  <main className="my-4 border-transparent h-full 
    rounded-lg border border-black border-opacity-15 shadow-md bg-white bg-opacity-10 ">
    <Outlet />
   
  </main>
  

</div>
  </div>)
   : null

}

export default App
