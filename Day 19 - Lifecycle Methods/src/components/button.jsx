import '../style.css'
import { useState } from 'react'

const Button = ()=>{

    const [value,setValue]=useState(0)
    return(
        
        <button className="btn" onClick={()=>setValue(value+1)}>{value}</button>
    )
}

export default Button;