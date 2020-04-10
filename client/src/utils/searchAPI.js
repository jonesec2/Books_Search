import axios from "axios";

export default {
   requestBooks: function() {
   const key = "AIzaSyBCbxsdjBPKIvd6rble1hwEZ6BbffLJi2o"
   const query = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key="+key
   return console.log(query);
   }

}