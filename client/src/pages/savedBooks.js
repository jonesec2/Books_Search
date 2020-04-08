import React, { useEffect } from "react";
import API from "../utils/savedAPI";

export default function SavedBooks() {

   // useEffect(() => {
   //    loadSaved()
   // }, [])

   function loadSaved() {
      API.getSaved()
         .then(res =>
            console.log(res.data)
         )
         .catch(err => console.log("rip" + err))
   }

   loadSaved();   

   return (
      <h1>Saved</h1>
      
   )
}