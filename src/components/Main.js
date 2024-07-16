import React from "react";
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import CharList from "./CharList.js";
import CharDetail from "./CharDetail.js";
import CharLoc from "./CharLoc.js";

import {Routes, Route, Navigate} from 'react-router-dom';
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

function Main(){
    return(
        <React.Fragment>
            <Navbar/><br></br>
                <Routes>
                    <Route path="/CharList" element={<CharList/>}/>
                    <Route path="/CharDetail/:characterId" element={<CharDetail/>}/>
                    <Route path="/CharLoc" element={<CharLoc/>}/>
                    <Route path="*" element={<Navigate to="/CharList" replace />}/>
                </Routes>
            <Footer/>
        </React.Fragment>
    )
}

export default withRouter(Main);