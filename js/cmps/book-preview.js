export default {
    props: ['book'],
    template: `
          <div class="book-preview">
         <p  class="title">{{book.title}} </p>
         <img class="img-book" :src="book.thumbnail"/>
         <p class="price">Price: 
            <span :class="basedClasses">{{formatCurrency}}</span>
            <img class="sale-list-img" src="imgs/SALE.png" v-if="book.listPrice.isOnSale"/></p>
    </div>
 `,
    methods: {

    },
    computed: {
        formatCurrency() {
            return this.book.listPrice.amount.toLocaleString('us-US', { style: 'currency', currency: this.book.listPrice.currencyCode })
        },
        basedClasses() {
            return { red: this.book.listPrice.amount > 150, green: this.book.listPrice.amount < 20 }
        },
    }
};