import bookGooglePreview from "./book-google-preview.js"

export default {
    template: `
     <ul class="book-google-list"> 
     <li>  
         <book-google-preview/>
      </li>
     </ul>`,
    components: {
        bookGooglePreview
    }
}