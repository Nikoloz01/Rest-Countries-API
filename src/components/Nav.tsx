import React from "react";
import { Link } from 'react-router-dom';


const Nav: React.FC = () => {
  return (
    <nav className="">
      <Link to=''> 
         <h1 className="mt-3 mb-3 text-3xl font-semibold bg-transparen">Where in the world?</h1>
          </Link>
    </nav>
  );
};

export default Nav;
