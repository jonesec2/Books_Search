import React from "react";



function DeleteBtn(props) {
  return (
    <button className="col-lg-1 col-md-2 col-sm-auto border btn btn-light float-right" {...props} role="button" tabIndex="0">
      Delete
    </button>
  );
}

export default DeleteBtn;
