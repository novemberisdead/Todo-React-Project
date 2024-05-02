import React,{useState} from 'react'
import {createTodo} from "../Features/todoSlice"
import {useDispatch} from "react-redux"
import Add from '../assets/Svg/add'
import CircleAdd from '../assets/Svg/circleAdd'
import toast from 'react-hot-toast'
import Pen from '../assets/Svg/pen'
function CreateTodo() {
    const [input,setInput] = useState('')
    const [isHovered,SetisHovered] = useState(false)
    const dispatch = useDispatch()
    const submitHandler = (e)=>{
        e.preventDefault()
        if(input.length>0){
        dispatch(createTodo(input))
        setInput('')
        toast.success('Todo Created!', {
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
    }
    return (
        <div className='flex mx-20 w-10/12 justify-center my-2'>
            <form onSubmit={submitHandler}
                onMouseEnter={()=>SetisHovered(true)}
                onMouseLeave={()=>SetisHovered(false)}
                className='flex w-10/12 shadow-md border-black hover:border-l-2 rounded-md hover:shadow-lg
                 bg-teal-500 hover:bg-opacity-30 bg-opacity-10'>

                <div className='p-2'>
                    <Pen className='hover: bg-slate-200'/>
                </div> 
                <div className='w-full content-center'>

                    <input
                    type="text" 
                    className=' placeholder:text-gray-600  
                    bg-teal-300 bg-opacity-10 
                    bg-transparent w-full px-2 py-2 focus:outline-none
                    text-dusty-blue-darker '
                    placeholder='Create a Todo'
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    /> 
                </div>
                <div className='border-black hover:border-r-2 hover:border-l-2 shadow rounded'>
                    <button
                    className=' bg-green-600 bg-opacity-40 hover:bg-green-600 hover:bg-opacity-50 rounded px-4 py-4'
                    type='submit'
                    >{isHovered ? <CircleAdd/> : <Add/>}</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTodo
