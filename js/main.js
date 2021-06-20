import bookApp from './pages/book-app.js'
import bookHeader from './cmps/book-header.js';
import bookFooter from './cmps/book-footer.js';

const options = {
    el: '#app',
    template: `
       <section>
          <div class="wrapper">
          <book-header />
          <book-app />
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