import bookGooglePreview from "./book-google-preview.js"

export default {
    props: ['books'],
    template: `
     <ul class="book-google-list" > 
     <li v-for="book in books" :key="book.id">  
         <book-google-preview :book="book"/>
      </li>
     </ul>`,
    components: {
        bookGooglePreview
    }
}