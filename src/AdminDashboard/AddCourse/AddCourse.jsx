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
import { createNewCourse } from "../../Components/services/api";
const initialState={
  title:"",
  description:'',
  image:'',
  category:'',
  slug:''
}
const AddCourse = () => {
  const [image, setImage] = useState(null);
  const [img,setImg]=useState('');
  const[course,setCourse]=useState(initialState)
  const imageRef = useRef(null);


  const [slug, setSlug] = useState("");

  const handleUpload = () => {
    imageRef.current.click();
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({ image: URL.createObjectURL(img) });
      setImg(e.target.files[0])
    }
  };

  const handleText = (e) => {
    const {name,value}=e.target;
    if(name==="title"){
      const createSlug = value.trim().split(" ").join("-");
      setSlug(createSlug);
      setCourse({...course,['slug']:createSlug})
return
    }
    setCourse({...course,[name]:value})

  };

const handleCategory=(e,value)=>{
  console.log('value',e.target.name)

setCourse({...course,['category']: value})
}


const handleNewCourse=async()=>{

  const formData=new FormData();

  formData.append('title',course.title)
  formData.append('description',course.description)
  formData.append('category',course.category)
  formData.append('image',img)
  formData.append('slug',course.slug)
  const res=await createNewCourse(formData,img,slug)

console.log('create course response',res)

}

  return (
    <>
      <Typography variant="h5">Add New Course</Typography>
      <Stack width={"40vw"} spacing={3} boxShadow={2} padding={3}>
        <TextField
          label="Course Title* "
          variant="standard"
          color="warning"
          focused
          name="title"
          onChange={handleText}
        />
        <TextField value={slug} id="outlined-disabled"  />
        <TextField
          id="outlined-textarea"
          label="Course Description"
          placeholder="Enter Description"
          multiline
          rows={6}
          name="description"
          onChange={handleText}
        />

        <Category handleCategory={handleCategory}   />
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

        <Button variant="contained" endIcon={<SendIcon />} onClick={handleNewCourse} >
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
