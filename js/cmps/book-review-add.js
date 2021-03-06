export default {
    template: `
  <form class="book-review-add"  @submit.prevent="addReview">
     <div class="name-container">
      <label  for="name-inp">Full Name: </label>
      <input ref="name" id="name-inp" v-model="review.name" type="text" placeholder="Name..."/>
      </div>
      <div class="rate-container">
      <label for="rate">Rate: </label>
      <select id="rate" v-model="review.rate">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      </select>
      <button class="close-add-review" @click="closeAdd">X</button>
      </div>
      <label class="textarea-label" for="textarea">Your Review: </label>
    <textarea id="textarea" v-model="review.reviewText" placeholder="Your Review..."></textarea>
    <button class="send" type="submit"> Send </button>
  </form>
  `,
    data() {
        return {
            review: {
                name: null,
                rate: 1,
                createAt: null,
                reviewText: null
            }
        }
    },
    mounted() {
        this.$refs.name.focus();
    },
    methods: {
        addReview() {
            this.review.createAt = this.getDisplayTime;
            this.$emit('addReview', this.review)
        },
        closeAdd() {
            this.$emit('closeAdd')
        }
    },
    computed: {
        getDisplayTime() {
            const now = new Date();
            console.log('yes');
            return now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() + ',' + now.getHours() + ":" + now.getMinutes()
        }
    }
};