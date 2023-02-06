import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export default function UploadButton({handleUpload}) {

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      
      <IconButton color="success" aria-label="upload picture" component="label" onClick={handleUpload}>
   
        <PhotoCamera />
      </IconButton>

    
    </Stack>
  );
}