import bookApp from './pages/book-app.js'
import userMsg from './cmps/user-msg.js';
import bookHeader from './cmps/book-header.js';
import bookFooter from './cmps/book-footer.js';
import { router } from './router.js';
import { eventBus } from './services/event-bus-service.js';

const options = {
    el: '#app',
    router,
    template: `
       <section class="app-main" :class="{'menu-open' : isMenuOpen}">
          <div class="wrapper">
          <user-msg />
          <div class="main-screen" @click="toggleMenu"> </div>
          <book-header />
          <router-view />
          </div>
          <book-footer />
       </section>
   `,
    components: {
        bookApp,
        bookHeader,
        bookFooter,
        userMsg
    },
    data() {
        return {
            isMenuOpen: false
        }
    },
    created() {
        eventBus.$on('openMenu', this.toggleMenu);
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
};

const app = new Vue(options);