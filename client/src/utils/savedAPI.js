import axios from "axios";

export default {
   getSaved: function() {
      return axios.get("/api/saved");
   },
   saveBook: function(savedBook) {
      return axios.post("/api/saved");
   }
}