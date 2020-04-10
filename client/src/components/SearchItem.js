import React from "react";
import API from "../utils/API";


export default function SearchItem(props) {


   function saveBook(props) {
      console.log("test")
      API.saveBook({
         title: props.title,
         authors: props.authors[0],
         description: props.description,
         image: props.image,
         link: props.link
      })
         // .then(res => console.log( "test \r" + res))
         // .then(res => props.loadBooks())
         .catch(err => console.log(err));
   }

   return (
      <li className="list-group-item" id={props.id}>
         <div className="row">
            <h5 className="col-lg-6 col-md-12 float-left" >{props.title}</h5>
            <a href={props.link} rel="noreferrer noopener" target="_blank" className="col-lg-2 col-md-2 col-sm-auto border btn btn-light float-right" role="button">View</a>
            <button className="col-lg-2 col-md-2 col-sm-auto border btn btn-light float-right" onClick={() => saveBook(props)} tabIndex="0">Save Book</button>
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
