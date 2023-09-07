  import React from 'react'

  import {makeStyles} from "@material-ui/core/styles";
  import {useSelector} from "react-redux";
  import {Grid, Button} from "@material-ui/core";
  import Post from "./post";

  const useStyles = makeStyles((theme)=> ({

  }))


  export const PostsList = () => {
    const posts = useSelector((state) => state.posts.posts);
      console.log("Dönen postlar:");
      
    const classes = useStyles();
    return (
      <>
          <Grid container spacing={2} alignContent='stretch' background-color={'white'}>
            {posts.length >  0  && 
              posts.map((post) =>(
                <Grid item key={post._id}  xs={12} md={4}>
                    <Post {...post}/>

                </Grid> 
              ))}
          </Grid>
      </>
    )
  }

  export default PostsList