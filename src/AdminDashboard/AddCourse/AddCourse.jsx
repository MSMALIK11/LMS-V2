import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React, { useRef, useState } from "react";
import Category from "./Category";
import UploadButton from "./UploadButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
const AddCourse = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);

  const [slug, setSlug] = useState("");

  const handleUpload = (e) => {
    imageRef.current.click();
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({ image: URL.createObjectURL(img) });
    }
  };

  const handleTitle = (e) => {
    const createSlug = e.target.value.trim().split(" ").join("-");
    setSlug(createSlug);
  };

  return (
    <>
      <Typography variant="h4">Add New Course</Typography>
      <Stack width={500} spacing={3} boxShadow={2} padding={3}>
        <TextField
          label="Course Title*"
          variant="standard"
          color="warning"
          focused
          onChange={handleTitle}
        />
        <TextField value={slug} id="outlined-disabled" />

        <Category />
        <UploadButton handleUpload={handleUpload} />
        {image && (
          <Box className="imagePreview" sx={{ position: "relative" }}>
            <span className="closePeview">
              <IconButton aria-label="delete" onClick={() => setImage(null)}>
                <DeleteIcon />
              </IconButton>
            </span>
            <img src={image.image} alt="" width={450} height={300} />
          </Box>
        )}

        <Button variant="contained" endIcon={<SendIcon />} >
          Send
        </Button>
      </Stack>

      <input
        style={{ display: "none" }}
        accept="image/*"
        type="file"
        ref={imageRef}
        onChange={onImageChange}
      />
    </>
  );
};

export default AddCourse;
