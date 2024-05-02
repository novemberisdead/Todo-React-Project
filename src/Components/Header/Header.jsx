import React from 'react'
import Container from '../../Container/Container'
import LogOutBtn from './LogOutBtn'
import {  useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import Logo from '../../assets/Svg/logo'
import Todologo from '../../assets/Svg/todologo'

function Header() {
    const authStatus = useSelector((state)=> state.Auth.status)
    const navigate = useNavigate()

    const NavItems = [
        {
            name: <Todologo/>,
            slug: "/",
            active: true,
        },
        {
            name: "Sign Up",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "Log In",
            slug: "/login",
            active: !authStatus,
        },
       
        
    ]
    
    return (
        <header
         className='py-3 m-1 shadow bg-transparent rounded-lg backdrop-blur-10 hover:shadow-md hover:offset-1'>
            <Container>
                <nav className='flex flex-wrap '>
                <div className='mr-4 py-2'>
                 <Link to='/'>
                    <Logo width='70px'/>
                 </Link>
                </div>
                <ul className='flex ml-auto'>
                    {NavItems.map((item)=>
                    item.active ?(<li key={item.name}>
                        <button style={{ fontFamily: '"Share Tech Mono", monospace', fontWeight: 400, fontStyle: 'normal' }}
                         onClick={()=> navigate(item.slug)}
                        className='inline-block mx-1 my-2 px-4 py-2 hover: bg-transparent hover:border-black hover:border hover:border-opacity-60 shadow
                        hover:shadow-black hover:shadow-sm rounded text-sm border-gray-950 border-spacing-1 hover:backdrop:blur-sm'>
                            {item.name}
                        </button></li>) : null)}
                    {
                        authStatus && (
                            <li>
                                <LogOutBtn
                                className=''/>        
                            </li>
                        )
                    }    
                </ul>
                </nav>
            </Container>

        </header>
    )
}

export default Header
