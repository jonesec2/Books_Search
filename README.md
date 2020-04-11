# [Books Search](https://lit-plains-95784.herokuapp.com/)

A simple MERN app that uses the Google Books API to search for books and save them to view later.

## Preview

**[View Live Preview](https://lit-plains-95784.herokuapp.com/)**

## Technologies
- React
- MongoDB
  - Mongoose schema / routing
- Node
  - Express routing
- CSS

## Content
1st Page:
  - Search for a book and click the search button
    - The button will not be enabled until the user has provided input
  - Top 10 results display to user with Title, Author, Picutre, Description, and a Link to the book on Google Books
  - Save the book to your Saved Books page
  
2nd Page
  - On load this page shows the saved books from MongoDB
    - Because there are no users, the saved books are shared globally
  - The books display with Title, Author, Picture, Description and a Link to the book on Google Books
  - A delete button exists that will remove the book from the page and from the MongoDB


## Copyright and License

Starter code provided by Trinity through UoR Coding Bootcamp
