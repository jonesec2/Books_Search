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
      <button {...props}  className="col-3 col-md-6 btn btn-success">
         {props.children}
      </button>
   );
}