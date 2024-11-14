import React from "react";
import { useLocation } from "react-router-dom";
const Home = () =>{
    const location = useLocation();
  const {login} = location.state;
    return(
        <h1>Bonjour {login}</h1>
    )
}
export default Home;