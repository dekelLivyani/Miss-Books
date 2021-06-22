import bookDescription from '../cmps/book-description.js'
import bookReviewAdd from '../cmps/book-review-add.js'
import bookReviewsList from '../cmps/book-reviews-list.js'
import { bookService } from '../services/book-service.js'
import { eventBus } from '../services/event-bus-service.js'

export default {
    components: {
        bookDescription,
        bookService,
        bookReviewAdd,
        bookReviewsList,
    },
    template: `
    <section class="book-details" v-if="book">
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
            <div class="reviews-container">
               <book-review-add v-if="isAddReview" @addReview="addReview" @closeAdd="closeAddReview" />
               <book-reviews-list v-else :reviews="book.reviews"/>
            </div>
            <div class="buttons" :class="classToButtons">
            <button @click="clickAddReview" v-if="!isAddReview"> Add Review</button>
            <button class="go-back" @click="goBack"> Back</button>
            </div>
    </section>
  `,
    data() {
        return {
            book: null,
            isAddReview: false
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
        },
        closeAddReview() {
            this.isAddReview = false;
        },
        clickAddReview() {
            this.isAddReview = true;
        },
        addReview(review) {
            this.isAddReview = false

            bookService.addReview(this.book, review)
                .then(() => {

                    const msg = {
                        txt: 'Review Added!',
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                })
                .catch(err => {
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again later',
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg);
                });
        }
    },
    computed: {
        classToButtons() {
            return { justifyEnd: this.isAddReview }
        },
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