import React from "react";

export default function ListItem(props) {
   return (
      <li className="list-group-item">
         <div className="row">
            <h5 className="col-lg-6 col-md-12 float-left" >{props.title}</h5>
            <a href={props.link}  rel="noreferrer noopener" target="_blank" className="col-lg-1 col-md-2 col-sm-auto border btn btn-light float-right" role="button">View</a>
            <a className="col-lg-1 col-md-2 col-sm-auto border btn btn-light float-right" role="button">Delete</a>
         </div>
         <div className="row">
            <p className="col-12">{props.authors}</p>
         </div>
         <div className="row">
            <img className="col-md-4  col-sm-12 img-fluid" src={props.image} alt={props.title} />
            <p className="col-md-8 col-sm-12">{props.description}</p>
         </div>
      </li>
   );
}
