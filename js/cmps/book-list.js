import BookPreview from './book-preview.js'

export default {
    props: ['books'],
    template: `
    <ul class="book-list">
       <li v-for="book in books" :key="book.id">
            <book-preview :book="book" @click.native="clickBook(book.id)"/>
       </li>
    </ul>
  `,
    methods: {
        clickBook(bookId) {
            this.$emit('selectBook', bookId)
        }
    },
    components: {
        BookPreview,
    }
};