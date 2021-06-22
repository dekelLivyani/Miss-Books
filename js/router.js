import BookApp from './pages/book-app.js';
import BookDetails from './pages/book-details.js';
import homePage from './pages/home-page.js';
import aboutPage from './pages/about-page.js';
import aboutMe from "./cmps/about-me.js"
import aboutUs from "./cmps/about-us.js"

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage,
        children: [{
                path: 'me',
                component: aboutMe
            },
            {
                path: 'us',
                component: aboutUs
            },
        ]
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