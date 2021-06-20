export default {
    props: ['book'],
    template: `
          <div class="book-preview">
         <p  class="title">{{book.title}} </p>
         <img class="img-book" :src="book.thumbnail"/>
         <p class="price">Price: 
            <span>{{formatCurrency}}</span>
            <img class="sale-list-img" src="imgs/SALE.png" v-if="book.listPrice.isOnSale"/></p>
    </div>
 `,
    methods: {},
    computed: {
        formatCurrency() {
            return (new Intl.NumberFormat(this.book.listPrice.currencyCode, { style: 'currency', currency: this.book.listPrice.currencyCode }).format(this.book.listPrice.amount));
        }
    }
};