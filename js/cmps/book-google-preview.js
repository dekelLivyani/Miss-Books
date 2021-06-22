import { eventBus } from "../services/event-bus-service.js";

export default {
    props: ['book'],
    template: `
  <article class="book-google-preview">
     {{book.volumeInfo.title}}
     <button class="add-book" @click="clickAddBook">➕</button>
  </article>`,
    components: {
        eventBus,
    },
    methods: {
        clickAddBook() {
            eventBus.$emit('addBook', this.book)
        }
    }
}