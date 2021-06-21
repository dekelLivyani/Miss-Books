import { bookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.js';
import bookList from '../cmps/book-list.js';
import bookDetails from './book-details.js';

export default {
    template: `
    <main>
      <book-filter  v-if="!selectBook"  @filtered="setFilter"/>
      <book-list v-if="!selectBook" :books="booksToShow" @selectBook="setBookSelected"/>
      <book-details v-else :book="selectBook" @goBack="goBack" @clickRead="clickRead"/>
</main>
`,
    data() {
        return {
            books: bookService.query(),
            filterBy: null,
            selectBook: null,
            isLongText: false,
        }
    },
    components: {
        bookFilter,
        bookList,
        bookDetails,
    },
    methods: {
        setBookSelected(bookId) {
            const book = this.books.find(book => book.id === bookId)
            this.selectBook = book;
            this.filterBy = null;
        },
        goBack() {
            this.selectBook = null;
        },
        clickRead(ReadStatus) {
            this.isLongText = ReadStatus;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    computed: {
        booksToShow() {

            if (!this.filterBy || !this.filterBy.name && !this.filterBy.from && !this.filterBy.until) return this.books;
            var bookToShow = [];
            if (this.filterBy.name) {
                const searchStr = this.filterBy.name.toLowerCase();
                bookToShow = this.books.filter(book => {
                    return book.title.toLowerCase().includes(searchStr)
                });
            }
            var copyArray = (bookToShow.length) ? bookToShow.slice() : this.books;
            if (this.filterBy.from) {
                bookToShow = copyArray.filter(book => {
                    return book.listPrice.amount > this.filterBy.from
                })
            }
            var copyArray1 = (bookToShow.length) ? bookToShow.slice() : this.books;
            if (this.filterBy.until) {
                bookToShow = copyArray1.filter(book => {
                    return book.listPrice.amount < this.filterBy.until
                })
            }
            return bookToShow;
        },
    }

}