import bookDescription from '../cmps/book-description.js'
import { bookService } from '../services/book-service.js'

export default {
    components: {
        bookDescription,
        bookService,
    },
    template: `
    <div class="book-details" v-if="book">
         <p  class="title">{{book.title}} </p>
         <p  class="subtitle-book">{{book.subtitle}} </p>
         <p  class="authors" v-for="(author,idx) in book.authors" :key="idx"><span class="subtitle">Author:</span> {{author}}</p>
         <p  class="published-date"><span class="subtitle">Published at:</span> {{publishedDateDisplay}} </p>
         <p  class="page-count"><span class="subtitle">Page count:</span> {{pageCountDisplay}} </p>
         <p class="categories" ><span class="subtitle">Categories:</span> 
         <span v-for="(category,idx) in book.categories" :key="idx+1"> {{category}},</span>
         </p>
         <p  class="language"><span class="subtitle">language:</span> {{book.language}} </p>
         <p class="price"><span class="subtitle">Price:</span> 
            <span :class="basedClasses">{{formatCurrency}}</span></p>
            <img class="sale-img" src="imgs/SALE.png" v-if="book.listPrice.isOnSale"/>
            <img class="book-img" :src="book.thumbnail"/>
            <p class="description"><span class="subtitle">Description:</span>
             <book-description :desc="book.description"/> </p>

         <button @click="goBack"> Back</button>
    </div>
  `,
    data() {
        return {
            book: null
        }
    },
    created() {
        const { bookId } = this.$route.params;
        bookService.getById(bookId)
            .then(book => this.book = book)
    },
    methods: {
        goBack() {
            this.$router.push('/book');
        }
    },
    computed: {
        formatCurrency() {
            return (new Intl.NumberFormat(this.book.listPrice.currencyCode, { style: 'currency', currency: this.book.listPrice.currencyCode }).format(this.book.listPrice.amount));
        },
        pageCountDisplay() {
            if (this.book.pageCount > 500) return 'Long Reading'
            else if (this.book.pageCount > 200) return 'Decent Reading'
            else if (this.book.pageCount < 100) return 'Light Reading'
            else return this.book.pageCount;
        },
        publishedDateDisplay() {
            if (new Date().getFullYear() - this.book.publishedDate > 10) return 'Veteran Book'
            else if (new Date().getFullYear() - this.book.publishedDate < 1) return 'New!'
            else return this.book.publishedDate;
        },
        basedClasses() {
            return { red: this.book.listPrice.amount > 150, green: this.book.listPrice.amount < 20 }
        },
        descriptionDisplay() {
            if (new Date().getFullYear() - this.book.publishedDate > 10) return 'Veteran Book'
            else if (new Date().getFullYear() - this.book.publishedDate < 1) return 'New!'
            else return this.book.publishedDate;
        }
    }
}