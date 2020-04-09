import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import SubTitle from "../components/SubTitle";
import Wrapper from "../components/Wrapper";
import List from "../components/List";
import ListItem from "../components/ListItem"
import API from "../utils/savedAPI";
import { Input, FormBtn } from "../components/Search";


export default function Home() {

   const [books, setBooks] = useState([])
   const [formObject, setFormObject] = useState({})


   useEffect(() => {
      loadBooks()
   }, [])

   function loadBooks() {
      API.getSaved()
         .then(res =>
            setBooks(res.data)
         )
         .catch(err => console.log(err));
   };

   function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({ ...formObject, [name]: value })
   };

   function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.title && formObject.author) {
         API.saveBook({
            title: formObject.title,
            author: formObject.author,
            synopsis: formObject.synopsis
         })
            .then(res => loadBooks())
            .catch(err => console.log(err));
      }
   };


   return (
      <Wrapper>
         <Container>
            <Title />
            <SubTitle />
         </Container>
         <Container>
            <form>
               Search by Title or Author
               <Input
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Title (required)"
               />
               <Input
                  onChange={handleInputChange}
                  name="author"
                  placeholder="Author (required)"
               />
               <FormBtn
                  disabled={!(formObject.author || formObject.title)}
                  onClick={handleFormSubmit}
               >
                  Submit Book
              </FormBtn>
            </form>
         </Container>
         <Container>
            Results
         </Container>
      </Wrapper>

   )
}