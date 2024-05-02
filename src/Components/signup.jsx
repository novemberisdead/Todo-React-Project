import React,{useState} from 'react'
import {Button} from "./index"
import authService from '../Appwrite/Auth'
import { login } from '../Features/AuthSlice'
import { useDispatch } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form"
import Usericon from '../assets/Svg/usericon'
import Email from '../assets/Svg/email'
import Password from '../assets/Svg/password'
import toast from 'react-hot-toast'
import Loginicon from '../assets/Svg/loginicon'


function Signup() {
    const [error,setError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register,handleSubmit} = useForm()

        
    const create = async(data)=>{
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))
                navigate("/")
                toast.success('Signed up successfully!', {
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
        } catch (error) {
            setError(error.message)
        }
       
    }
    return (
        <div className='flex items-center justify-center my-2 bg-transparent  ' >
             
        <div className={`mx-auto w-full max-w-lg rounded-xl p-10 border border-black/10 hover:bg-transparent hover:backdrop-blur-sm hover:shadow bg-transparent bg-opacity-5`}>
        
        <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <div className='flex justify-center m-1'>
                        <Loginicon/>
                    </div>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have an account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline hover:text-green-800 hover:text-opacity-50"
                >
                    Sign In
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray ' onSubmit={handleSubmit(create)}>
           
                <div className='space-y-5 my-3'>
                    <div className='flex border border-gray-800 border-opacity-45 rounded-lg shadow-sm 
                    hover:border-opacity-55 hover:shadow-md hover:bg-blue-400 hover:bg-opacity-5 bg-transparent'>

                    <div>
                        <Usericon/>
                        </div>
                    <input
                    className='placeholder:text-gray-600 hover:placeholder:text-stone-700
                     bg-transparent w-11/12 rounded-md  my-1 px-2 py-2 focus:outline-none
                    text-dusty-blue-darker '
                    placeholder="Enter your full name"
                    {...register("name", {
                        required: true,
                    })}
                    />
                    </div>

                    <div className='flex border border-gray-800 border-opacity-45 rounded-lg shadow-sm 
                    hover:border-opacity-55 hover:shadow-md hover:bg-blue-400 hover:bg-opacity-5 bg-transparent'>
                            <div className=''>
                        <Email/>
                        </div>
                    <input
                    className='placeholder:text-gray-600 hover:placeholder:text-stone-700
                    bg-transparent w-11/12 rounded-md  my-1 px-2 py-2 focus:outline-none
                   text-dusty-blue-darker'
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                    </div>
                    <div className='flex border border-gray-800 border-opacity-45 rounded-lg shadow-sm 
                    hover:border-opacity-55 hover:shadow-md hover:bg-blue-400 hover:bg-opacity-5 bg-transparent'>
                            <div className=''>
                        <Password/>
                        </div>
                    <input
                    className='placeholder:text-gray-600 hover:placeholder:text-stone-700
                       bg-transparent w-11/12 rounded-md  my-1 px-2 py-2 focus:outline-none
                        text-dusty-blue-darker '
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,})}
                        />
                         </div>
                         <div>
                    
                        <div className='flex border border-gray-800 border-opacity-65 rounded-lg shadow-md 
                    hover:border-opacity-80 hover:shadow-lg hover:bg-black hover:bg-opacity-100 bg-white bg-opacity-15 '>

                    <Button type="submit" className="flex justify-center  ">
                        Create Account
                    </Button>
                        </div>
                        </div>
                </div>
            </form>
        </div>

</div> 
    )
}

export default Signup
