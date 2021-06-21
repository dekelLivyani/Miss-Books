import { bookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.js';
import bookList from '../cmps/book-list.js';

export default {
    template: `
    <main>
      <book-filter  @filtered="setFilter"/>
      <book-list :books="booksToShow"/>
</main>
`,
    data() {
        return {
            books: null,
            filterBy: null,
        }
    },
    components: {
        bookFilter,
        bookList,
    },
    created() {
        bookService.query()
            .then(books => this.books = books)

    },
    methods: {
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