import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import SubTitle from "../components/SubTitle";
import Wrapper from "../components/Wrapper";
import List from "../components/List";
import ListItem from "../components/ListItem"
import savedAPI from "../utils/API";
// import DeleteButton from "react";


export default function Home() {

   const [books, setBooks] = useState([])


   console.log(books[0])


   useEffect(() => {
      loadBooks()
   }, [])

   function loadBooks() {
      savedAPI.getSaved()
         .then(res =>
            setBooks(res.data)
         )
         .catch(err => console.log(err));
   };

   return (
      <Wrapper>
         <Container>
            <Title />
            <SubTitle>Search for books using Google Books API</SubTitle>
         </Container>
         <Container>
            <SubTitle>Saved Books</SubTitle>
            {books.length ? (
               <List>
                  {books.map(book => (

                     <ListItem
                        _id={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        loadBooks={loadBooks}
                     >
                     </ListItem>
                  ))}
               </List>
            ) : (<h3>No Results to Display</h3>)}
         </Container>
      </Wrapper>

   )
}