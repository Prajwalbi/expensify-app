import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () =>{
    return <div>
      <h1>Hello Rana, Page not found!!</h1>
      <h2>Go, Back to home <Link to="/home">Home</Link></h2>
    </div>
  }

  export default NotFoundPage;