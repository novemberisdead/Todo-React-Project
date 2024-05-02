import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Appwrite/Auth'
import { logOut } from '../../Features/AuthSlice'
import toast from 'react-hot-toast'
function LogOutBtn() {
    const dispatch = useDispatch()
    const logOutHandler =()=>{
        authService.logOut().then(()=>{
            dispatch(logOut())
                toast.success('Logout Successful!', {
                    style: {
                      border: '0px solid #047857',
                      backgroundColor: 'rgba(4, 120, 87,0.25)',
                      padding: '10px',
                      margin:'10px',
                      color: '#023020',
                      
                    },
                    iconTheme: {
                      primary: '#047857',
                      secondary: '#FFFAEE',
                    },
                  });
            }
            
        )
    }
    return (
        <button style={{ fontFamily: '"Share Tech Mono", monospace', fontWeight: 400, fontStyle: 'normal' }}
         onClick={logOutHandler}
        className='inline-block mx-1 my-2 px-4 py-2 hover: bg-transparent hover:border-black hover:border hover:border-opacity-60 shadow
        hover:shadow-black hover:shadow-sm rounded text-sm border-gray-950 border-spacing-1'
        >
                Logout
        </button>
    )
}

export default LogOutBtn
