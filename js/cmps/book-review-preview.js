export default {
    props: ['review'],
    template: `
     <div class="book-reviews-preview">
       <p class="name"> {{review.name}}</p> 
       <p class="rate" > Rate:  {{review.rate}}</p> 
       <p class="create-at">  {{review.createAt}}</p> 
       <p class="review-text">   {{review.reviewText}}</p> 
     </div>
 `,
};