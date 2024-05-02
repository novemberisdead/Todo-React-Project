import React,{useId} from 'react'


    function Input({
        label,
        type = "text",
        className= "",
        ...props 
    },ref) {
        const id = useId()
        return (
            <div className='w-full'>
                {label && <label
                className='inline-block mb-1 pl-1 '
                htmlFor={id}>
                    {label}</label>}
                    <input
                    type={type}
                    className={`${className} placeholder:text-gray-600 hover:placeholder:text-stone-700
                    bg-transparent w-11/12 rounded-md  my-1 px-2 py-2 focus:outline-none
                    text-dusty-blue-darker`}
                    {...props}
                    id={id}
                    ref={ref}
                    />
            </div>
        )
    }


export default React.forwardRef(Input)