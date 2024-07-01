import React from "react";
import { Link } from "react-router-dom";
 
const Footer = () => {
  const data = [
    
    {
      icon: "fas fa-film",
      name: "Movies",
      path: "/movies" ,

    },

    {
      icon: "fas fa-search",
      name: "Search (coming soon)",
      path: "/search" ,

    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center bg-dark footer">
          {data.map((item, index) => (
            <Link key={index} to={item.path}>
              <button className="col-sm-2 col-md-2 btn btn-dark">
                <i className={item.icon} id="fire"></i>
                <br />
                <h5 className="pt-1 fs-6">{item.name}</h5>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
 
 
export default Footer;