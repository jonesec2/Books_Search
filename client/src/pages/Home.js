import React, { useState } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import SubTitle from "../components/SubTitle";
import Wrapper from "../components/Wrapper";
import List from "../components/List";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Search";
import SearchItem from "../components/SearchItem";



export default function Home() {

   const [results, setResults] = useState([])
   const [formObject, setFormObject] = useState({})

   function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({ ...formObject, [name]: value })
   };

   function apiRequest(event) {
      event.preventDefault();
      if (formObject.title) {
         API.requestBooks({
            title: formObject.title
         })
            .then(res =>
               setResults(res.data.items)
            )
            .then(res =>
               console.log(results))
            .catch(err => console.log("request books " + err))
      }
   };

   return (
      <Wrapper>
         <Container>
            <Title />
            <SubTitle>Search for books using Google Books API</SubTitle>
         </Container>
         <Container>
            <SubTitle>Search By Title of Book</SubTitle>
            <form>
               <Input
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Title"
               />
               <FormBtn
                  disabled={!(formObject.author || formObject.title)}
                  onClick={apiRequest}
               >
                  Submit Book
              </FormBtn>
            </form>
         </Container>
         <Container>
            <SubTitle>Results Here</SubTitle>
            {results.length ? (
               <List>
                  {results.map(result => (
                     <SearchItem
                        title={result.volumeInfo.title}
                        authors={result.volumeInfo.authors}
                        description={result.volumeInfo.description}
                        image={
                           result.volumeInfo.imageLinks === undefined
                           ? "https://via.placeholder.com/64x64.png?text=No+Image+Found"
                           : result.volumeInfo.imageLinks.thumbnail
                        }
                        link={result.volumeInfo.infoLink}
                        // showResults={showResults}
                     >
                     </SearchItem>
                  ))}
               </List>
            ) : (<h5>No Results to Display</h5>)}
         </Container>
      </Wrapper>

   )
}