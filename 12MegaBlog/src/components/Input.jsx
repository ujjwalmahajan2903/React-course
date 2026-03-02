import React,{useId} from "react";

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className="w-full">
            {label && <label
            className="inline-block mb-1 pl-1"
            htmlFor={id}>
                {label}
                 </label> 
            }
            <input>
            </input>
                        
                type = {type}
        </div>
    )
})

export default Input