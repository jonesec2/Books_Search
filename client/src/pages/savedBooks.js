import React, { useEffect } from "react";
import API from "../utils/savedAPI";
import Banner from "../components/Banner"

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
      <Banner/>
      
   )
}