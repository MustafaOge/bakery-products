import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {Grid,  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import  {Blog}  from "./components/blog";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { useDispatch } from 'react-redux';
import { fetchPosts } from './actions/post_actions';
import PostsList from "./components/components_post/PostsList";
import PostDetails from "./components/components_post/PostDetails";
import Maps from "./components/Maps";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(6),
  },
}));

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const dispatch = useDispatch();

  
  
  useEffect(() => {
    dispatch(fetchPosts());

    setLandingPageData(JsonData);
  }, [dispatch])


  const classes = useStyles();
<Grid container className={classes.controller}>
          <Grid item xs={12}>
            <Router>
              <Routes>
                
                <Route exact path="/posts" Component={PostsList}/>
                <Route path="/" element={<Navigate replace to="/posts"/>} />
                <Route exact path="/posts/:id" Component={PostDetails}/>
                

              </Routes>
              </Router>
              </Grid>
</Grid>


  return (
    <div>

      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Blog data={landingPageData.Blog}/>
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Maps data={landingPageData.Maps}/>
      <Contact data={landingPageData.Contact} />


    </div>



    
  );
};

export default App;










