import AccountCircle from '@mui/icons-material/AccountCircle'
import { Input, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const TextBox = ({label,handleChange,name,icon,error,user}) => {
  return (
    <div className='textBox'>

 
    <Input
    autoComplete='off'
    id="input-with-icon-adornment"
    className={`mt-3`}
  name={name}
    placeholder={label}
    onChange={handleChange}
    startAdornment={
      <InputAdornment position="start">
      {icon}
      </InputAdornment>
    }
    />
    {name==="email" && <span className={`lightDefault ${error?'redLight':'green'}`}></span> }
 
   
    </div>

    //  <TextField id="standard-basic" name={name} label={label} variant="standard"  onChange={handleChange} />
  )
}

export default TextBox