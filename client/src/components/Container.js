import React from "react";

export default function Container(props) {

   return (
      <div className="container text-center mx-auto my-3">
         <div className="container border mx-auto my-3 py-2">
            {props.children}
         </div>
      </div>
   )
}