import axios from "axios";
const key = "&key=AIzaSyBCbxsdjBPKIvd6rble1hwEZ6BbffLJi2o"
const url = "https://www.googleapis.com/books/v1/volumes?q="

export default {
   requestBooks: function (title) {
      console.log(title.title)
      console.log(url + title.title + key)
      return axios.get(url + title + key)
   },
   getSaved: function() {
      return axios.get("/api/saved");
   },
   saveBook: function(savedBook) {
      return axios.post("/api/saved", savedBook);
   },
   deleteBook: function(id) {
      console.log("saved API")
      return axios.delete("/api/saved/" + id);
   }
}
