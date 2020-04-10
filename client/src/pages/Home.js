import React, { useState } from "react";
import Title from "../components/Title";
import Container from "../components/Container";
import SubTitle from "../components/SubTitle";
import Wrapper from "../components/Wrapper";
import List from "../components/List";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Search";
import SearchItem from "../components/SearchItem";
import NoImage from "../img/NoImageFound.png"



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
                        id={result.volumeInfo.id}
                        title={result.volumeInfo.title}
                        authors={
                           result.volumeInfo.authors === undefined
                           ? "No authors found"
                           : result.volumeInfo.authors
                        }
                        description={
                           result.volumeInfo.description === undefined
                           ? "No description found"
                           : result.volumeInfo.description
                        }
                        image={
                           result.volumeInfo.imageLinks === undefined
                           ? NoImage
                           : result.volumeInfo.imageLinks.thumbnail
                        }
                        link={
                           result.volumeInfo.infoLink === undefined
                           ? "https://www.google.com/search?tbm=bks&sxsrf=ALeKk02LqFqgr-nSOF6dTHMYMQ1uAgZ-HA%3A1586547420101&ei=3MqQXt7sBbalytMPqZKhgAE&q=whoops1%21+.NoResults%21+.UhO+.Try.Again%21&oq=whoops1%21+.NoResults%21+.UhO+.Try.Again%21&gs_l=psy-ab.3...2284.2284.0.2603.1.1.0.0.0.0.120.120.0j1.1.0....0...1c.1.64.psy-ab..0.0.0....0.6W7UtTvb2yA"
                           : result.volumeInfo.infoLink
                        }
                        
                     >
                     </SearchItem>
                  ))}
               </List>
            ) : (<h5>No Results to Display</h5>)}
         </Container>
      </Wrapper>

   )
}