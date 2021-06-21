import bookReviewPreview from './book-review-preview.js'

export default {
    props: ['reviews'],
    template: `
      <ul class="book-reviews-list">
         <li v-for="(review,idx) in reviews" :key="idx">
               <book-review-preview :review="review"/>
         </li>
   </ul>
  `,
    components: {
        bookReviewPreview,
    }
};