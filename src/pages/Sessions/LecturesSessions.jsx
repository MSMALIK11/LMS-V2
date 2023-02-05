import { List,ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React,{useState,useEffect} from "react";

import ReactPlayer from "react-player";
import StarIcon from '@mui/icons-material/Star';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { useParams } from "react-router-dom";
import { fetchSingleCourse } from "../../Components/services/api";
import { NavLink } from "react-router-dom";

import {Grid} from "@mui/material";

const LecturesSessions = () => {
  const [course,setCourse]=useState([]);
  const[video,setVideo]=useState([])
  const {title,slug}=useParams();
  console.log(title,slug)

  const  getAllCourse=async()=>{
      const course=await fetchSingleCourse(title)

      if(course){
        setCourse(course)
      }
  }

useEffect(()=>{
  getAllCourse();

},[])

useEffect(() => {
  if(course){

      const vlink = course?.lessons?.find((lesson) => lesson.slug===slug);
    console.log('vlink',vlink)
    if(!vlink) return;
    
      setVideo(vlink.link);
  }

}, [slug]);



console.log('course session',course)
console.log('course session vid',video)
  return (
  
      <div className="session">
        <Grid container spacing={3}>
          <Grid item lg={8} className="leftPlayer">
            <ReactPlayer url={video?.url} 
            playing={true}  
            
           controls={true}
             width='100%'
          height='100%' />
          </Grid>
          <Grid item lg={4} className="rightLessionContent">
          <List
      sx={{ width: '100%', bgcolor: '#eee' }}
      aria-label="contacts"
    >
      {
        course?.lessons?.map((lesson,index)=>{
          return(
            <>
             <ListItem disablePadding>
             <NavLink
            
            to={{
              pathname: `/course/session/${title}/${lesson.slug}`,
            }}
            
          
            key={index}
          //  className="nav-link"
            className={`nav-link content-item ${lesson.slug===slug? "active" : ""}`}
          >
            <ListItemButton>
          <ListItemIcon>
            <PlayCircleFilledIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={lesson.title} />
        </ListItemButton>
           
          </NavLink>
        
      </ListItem>
            </>
          )
        })
      }
     
      </List>
      
          </Grid>
        </Grid>
      </div>
 
  );
};

export default LecturesSessions;
