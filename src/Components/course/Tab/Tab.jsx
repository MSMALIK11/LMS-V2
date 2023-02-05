import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const CategoryTab=()=> {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',marginTop:'20px',marginLeft:'20px' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Web Development" />
        <Tab value="two" label="Software Development" />
        <Tab value="three" label="Android Development" />
      </Tabs>
    </Box>
  );
}

export default CategoryTab