import bookGoogleList from "./book-google-list.js"
import { bookService } from '../services/book-service.js'
import { eventBus } from "../services/event-bus-service.js"

export default {
    template: `
   <section class="book-google-search">
      Add book : 
      <input type="text" v-model="title" placeholder="name of book">
      <button class="search" @click="getBooks">Search</button>
      <book-google-list v-if="books" :books="books"/>
      <button class="close" v-if="books" @click="closeSearch"> X</button>
   </section>`,
    components: {
        bookGoogleList,
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
                    const msg = {
                        txt: 'Your book added!',
                        type: 'success'
                    }
                    console.log('yes!');
                    this.closeSearch();
                    eventBus.$emit('show-msg', msg);
                    this.$emit('bookAdded')
                })
                .catch(err => {
                    const msg = {
                        txt: 'Error, please try again later',
                        type: 'error'
                    }
                    this.closeSearch();
                    eventBus.$emit('show-msg', msg);
                });

        }
    }
}