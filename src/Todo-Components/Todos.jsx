import React,{useState} from 'react'
import  {updateTodo,todoComplete,removeTodo} from "../Features/todoSlice"
import {useDispatch} from "react-redux"
import Remove from '../assets/Svg/remove'
import Edit from '../assets/Svg/edit'
import Save from '../assets/Svg/save'
import toast from 'react-hot-toast'


function Todos({todo}) {
    const[newText, setNewText]= useState(todo.text)
    const [ isEditable,setIseditable]= useState(false)
    const [isChecked,setIsChecked]= useState(false)

    const dispatch = useDispatch()

    const editTodo =()=>{
        dispatch(updateTodo(todo.id))
        setIseditable(false)
    }

    const deleteTodo = ()=>{
        dispatch(removeTodo(todo.id))
        toast.success('Todo Deleted Succesfully!', {
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

    const toggle = ()=>{
        dispatch(todoComplete(todo.id))
        if(!isChecked){
            toast.success('Task Achieved!', {
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
        setIsChecked(!isChecked)
    }
    return (
        
      <div className=' block shadow-md border-black  rounded-lg hover:shadow-lg
        bg-teal-300 bg-opacity-20 hover:bg-teal-400 hover:bg-opacity-25  mb-0  
         hover:border-t-0 hover:border-b-0 hover:border-l-2 content-center'>
            <div className='flex'>
                <div 
                  className={isChecked ? 'flex w-full pl-2 line-through bg-green-600 bg-opacity-40 rounded-lg ' : `flex w-full ml-3`}
                  >
                    <input type="checkbox" 
                    value={isChecked}
                    onChange={toggle} />
        
                    <div className='w-full flex'>
                      <textarea type="text"
                      className={isEditable? 'hover:cursor-text m-2 pl-1 resize-none focus:outline-none content-center w-full bg-transparent  ' 
                      : `m-2 pl-1 resize-none focus:outline-none cursor-default content-center w-full bg-transparent `}
                      readOnly={!isEditable}
                      value={newText}
                      onChange={(e)=> setNewText(e.target.value)} />
                    </div>

                  </div>

                  <div className='  bg-cyan-600 bg-opacity-30 hover:bg-cyan-600  hover:bg-opacity-50 hover:border-l-2
                    border-black flex rounded-md shadow'>
                    <button className=' px-4 hover:rotate-3'
                      onClick={()=>{
                          if(isChecked) return;
                          if(isEditable){
                              editTodo()
                          }else{
                              setIseditable((prev)=> !prev)
                          }
                       }}
                      >{isEditable ? <Save/> : <Edit/>}</button>
                  </div>

                  <div className=' bg-red-600 bg-opacity-35 rounded-md shadow
                    border-black flex hover:bg-red-600  hover:bg-opacity-55 hover:border-l-2 hover'>
                    <button
                    className='px-4 hover:rotate-3'
                    onClick={deleteTodo}
                    >{<Remove/>}</button>
                  </div>
            </div>
      </div>
    )
}

export default Todos
