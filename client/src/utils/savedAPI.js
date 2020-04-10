import axios from "axios";

export default {
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
