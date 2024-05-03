import React,{useState} from 'react'
import authService from '../Appwrite/Auth'
import { useDispatch } from 'react-redux'
import {Link,useNavigate} from "react-router-dom"
import { useForm } from 'react-hook-form'
import {Input,Button} from "./index"
import {login as authlogin} from "../Features/AuthSlice"
import Email from '../assets/Svg/email'
import Password from '../assets/Svg/password'
import Loginicon from '../assets/Svg/loginicon'
import toast from 'react-hot-toast'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error,setError] = useState(false)
    const {register,handleSubmit} = useForm()

    const login = async(data)=>{
        setError("")
        try {
            const sessions = await authService.login(data)
            if (sessions) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authlogin(userData));
                navigate('/')
                toast.success('Login successful!', {
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
        <div
        className='flex items-center justify-center w-full my-10'
        >
            <div className={`mx-auto w-full max-w-lg rounded-xl p-10 border border-black/10
             hover:bg-transparent hover:backdrop-blur-sm hover:shadow-xl shadow-md bg-white bg-opacity-10 `}>
            <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                           <div className='flex justify-center m-1'>
                        <Loginicon/>
                        </div>
                        </span>
            </div>
                 <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                     <p className="mt-2 text-center text-base text-black/60">
                          Don&apos;t have any account?&nbsp;
                          <Link
                                to="/signup"
                                className="font-medium text-primary transition-all duration-200 hover:underline hover:text-green-800 hover:text-opacity-50"
                                >Sign Up
                            </Link>
                     </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
           
                <div className='space-y-5'>
                    <div className='flex border border-gray-800 border-opacity-45 rounded-lg shadow-sm 
                    hover:border-opacity-55 hover:shadow-md hover:bg-blue-400 hover:bg-opacity-5 bg-transparent'>
                    <div className=''>
                        <Email/>
                        </div>
                    <Input
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
                    
                        <div>
                            <Password/>
                        </div>
                        <Input 
                        placeholder= "Enter Your Password"
                        type="password"
                        {...register("password", {
                            required: true,
                            
                        })}
                        />
                   </div>

                   <div className='flex  border border-gray-800 border-opacity-65 rounded-lg shadow-md 
                    hover:border-opacity-80 hover:shadow-lg hover:bg-black hover:bg-opacity-100 bg-white bg-opacity-15 '>

                        <Button
                        type="submit"
                        className="w-full flex justify-center text-black"
                        >Sign in</Button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login
