import bookGoogleList from "./book-google-list.js"
import { bookService } from '../services/book-service.js'
import { eventBus } from "../services/event-bus-service.js"

export default {
    template: `
   <section class="book-google-search">
      Add book from google: 
      <input type="text" v-model="title" placeholder="name of book" list="list">
      <datalist id="list">
         <option>Harry Potter</option>
         <option>Batman</option>
         <option>Dora</option>
      </datalist>
      <button class="search" @click="getBooks">Search</button>
      <book-google-list v-if="books" :books="books"/>
      <button class="close" v-if="books" @click="closeSearch"> X</button>
   </section>`,
    components: {
        bookGoogleList,
        bookService
    },
    data() {
        return {
            books: null,
            title: ''
        }
    },
    created() {
        eventBus.$on('addBook', this.addBook);
    },
    methods: {
        getBooks() {
            if (!this.title) return;
            bookService.getBooksFromGoogle(this.title)
                .then(books => {
                    this.books = books.items;
                })
        },
        closeSearch() {
            this.title = '';
            this.books = null;
        },
        addBook(book) {
            bookService.addBook(book)
                .then(book => {
                    this.closeSearch();
                    this.$emit('bookAdded')
                })
        }
    }
}