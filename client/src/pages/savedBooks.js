import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import SubTitle from "../components/SubTitle";
import Wrapper from "../components/Wrapper";
import List from "../components/List";
import ListItem from "../components/ListItem"
import API from "../utils/savedAPI";


export default function Home() {

   const [books, setBooks] = useState([])


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


   return (
      <Wrapper>
         <Container>
            <Title />
            <SubTitle />
         </Container>
         <Container>

         </Container>
         <Container>
            Results
            {books.length ? (
               <List>
                  {books.map(book => (
                     <ListItem 
                     title={book.title}
                     authors={book.authors}
                     description={book.description}
                     image={book.image}
                     link={book.link}>
                     </ListItem>
                  ))}
               </List>
            ) : (<h3>No Results to Display</h3>)}
         </Container>
      </Wrapper>

   )
}