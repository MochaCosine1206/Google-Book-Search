import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  googlebooks: function(searchterm) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchterm);
  },

    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/search", bookData);
    },

    //Get all books from the database
    getBooks: function() {
      return axios.get("/api/search")
    },

    deleteBook: function(id) {
      return axios.delete("/api/search/" + id)
    }


};