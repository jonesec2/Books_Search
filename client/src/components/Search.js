import React from "react";

export function Input(props) {
   return (
      <div className="form-group">
         <input className="form-control" {...props} />
      </div>
   );
}

export function FormBtn(props) {
   return (
      <button {...props}  className="col-8 col-md-6 col-sm-8 btn btn-success">
         {props.children}
      </button>
   );
}