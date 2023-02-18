import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Web Development', 'Software Development',"Android Development"];

export default function Category({handleCategory}) {
 

  return (
    <div>
     
      <Autocomplete
      name="category"
    
        onChange={
          handleCategory}
  
        onInputChange={handleCategory}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Choose Category" />}
      />
    </div>
  );
}