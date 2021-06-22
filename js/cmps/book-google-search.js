import bookGoogleList from "./book-google-list.js"

export default {
    template: `
   <section class="book-google-search">
      Add book from google: 
      <input type="text" placeholder="name of book" @input="getBooks">
      <book-google-list/>
   </section>`,
    components: {
        bookGoogleList
    },
    methods: {
        getBooks() {

        }
    }
}