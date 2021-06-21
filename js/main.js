import bookApp from './pages/book-app.js'
import bookHeader from './cmps/book-header.js';
import bookFooter from './cmps/book-footer.js';
import { router } from './router.js';

const options = {
    el: '#app',
    router,
    template: `
       <section>
          <div class="wrapper">
          <book-header />
          <router-view />
          </div>
          <book-footer />
       </section>
   `,
    components: {
        bookApp,
        bookHeader,
        bookFooter
    }
};

const app = new Vue(options);