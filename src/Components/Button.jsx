import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = '',
    textColor = 'text-black hover:text-white',
    className = '',
    ...props 
}) {
    return (
        <button className={`flex bg-transparent w-11/12 rounded-md  my-1 px-2 py-2 focus:outline-none
        text-dusty-blue-darker
         ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button