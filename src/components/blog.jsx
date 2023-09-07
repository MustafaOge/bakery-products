  import React, {useState, useEffect} from 'react';
  import PostsList  from "./components_post/PostsList";
  import {  Button, } from '@material-ui/core';
  import PenIcon from '@material-ui/icons/Create';
  import AddPostForm from './components_post/AddPostForm';

  export const Blog = () => {
    let [open, setOpen] = useState(false);


    let handleOpen = () => {
        setOpen(true);
      
    }
    let handleClose = () => {
        setOpen(false);
      
    }
    return (
      <div id="blog" className="text-center">
        <div className="container">
          <div className="row">
    
          <div className="d-flex justify-content-between align-items-center">
          <div className="section-title">
          <h2>Blog</h2>
        
        </div>
            </div>
    
            <div className="col-md-6">
              {
         
              }
            </div>
           
          </div>
        </div>
    
        <div className="container">
          <div className="row">
            <PostsList />
          </div>
        </div>
        <AddPostForm open={open} handleClose={handleClose} />
      </div>
    );
    }  
