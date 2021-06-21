import BookApp from './pages/book-app.js';
import BookDetails from './pages/book-details.js';
import homePage from './pages/home-page.js';
import aboutPage from './pages/about-page.js';

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book',
        component: BookApp
    },
    {
        path: '/book/:bookId',
        component: BookDetails
    },
];
export const router = new VueRouter({ routes });