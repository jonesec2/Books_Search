import React from "react";
import API from "../utils/savedAPI";


export default function ListItem(props) {


   function removeBook(id) {
      console.log("test", id)
      API.deleteBook(id)
      .then(res => props.loadBooks())
      .catch(err => console.log(err));
   }

   return (
      <li className="list-group-item">
         <div className="row">
            <h5 className="col-lg-6 col-md-12 float-left" >{props.title}</h5>
            <a href={props.link} rel="noreferrer noopener" target="_blank" className="col-lg-1 col-md-2 col-sm-auto border btn btn-light float-right" role="button">View</a>
            <button className="col-lg-1 col-md-2 col-sm-auto border btn btn-light float-right" onClick={() => removeBook(props._id)} tabIndex="0">Delete</button>
            {/* {props.child} */}
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
