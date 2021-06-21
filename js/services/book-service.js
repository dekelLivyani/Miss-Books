import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';

const BOOKS_KEY = 'books';

export const bookService = {
    query,
    getById,
    addReview,
};

function query() {
    return storageService.query(BOOKS_KEY)
        .then(books => {
            if (!books || !books.length) {
                var booksToSave = books = [{
                        "id": "OXeMG8wNskc",
                        "title": "metus hendrerit",
                        "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
                        "authors": [
                            "Barbara Cartland"
                        ],
                        "publishedDate": 1999,
                        "description": "placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
                        "pageCount": 713,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
                        "language": "en",
                        "listPrice": {
                            "amount": 109,
                            "currencyCode": "EUR",
                            "isOnSale": false
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "JYOJa2NpSCq",
                        "title": "morbi",
                        "subtitle": "lorem euismod dictumst inceptos mi",
                        "authors": [
                            "Barbara Cartland"
                        ],
                        "publishedDate": 1978,
                        "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris  aliquam tempor nisl auctor",
                        "pageCount": 129,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
                        "language": "sp",
                        "listPrice": {
                            "amount": 44,
                            "currencyCode": "EUR",
                            "isOnSale": true
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "1y0Oqts35DQ",
                        "title": "at viverra venenatis",
                        "subtitle": "gravida libero facilisis rhoncus urna etiam",
                        "authors": [
                            "Dr. Seuss"
                        ],
                        "publishedDate": 1999,
                        "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod placerat nisi sodales suscipit tellus tincidunt mauris  tortor sagittis habitant",
                        "pageCount": 972,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
                        "language": "he",
                        "listPrice": {
                            "amount": 108,
                            "currencyCode": "ILS",
                            "isOnSale": false
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "kSnfIJyikTP",
                        "title": "dictum",
                        "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
                        "authors": [
                            "Danielle Steel"
                        ],
                        "publishedDate": 1978,
                        "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris  enim vivamus augue molestie imperdiet tincidunt aliquam",
                        "pageCount": 303,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
                        "language": "en",
                        "listPrice": {
                            "amount": 30,
                            "currencyCode": "EUR",
                            "isOnSale": true
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "f4iuVmbuKCC",
                        "title": "sem himenaeos aptent",
                        "subtitle": "interdum per habitasse luctus purus est",
                        "authors": [
                            "Dr. Seuss"
                        ],
                        "publishedDate": 2011,
                        "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
                        "pageCount": 337,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
                        "language": "sp",
                        "listPrice": {
                            "amount": 19,
                            "currencyCode": "USD",
                            "isOnSale": false
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "U2rfZO6oBZf",
                        "title": "mi ante posuere",
                        "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
                        "authors": [
                            "Leo Tolstoy"
                        ],
                        "publishedDate": 1978,
                        "description": "senectus habitant nam imperdiet nostra elit placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris dapibus nisl adipiscing in",
                        "pageCount": 748,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/1.jpg",
                        "language": "en",
                        "listPrice": {
                            "amount": 91,
                            "currencyCode": "USD",
                            "isOnSale": true
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "xI0wrXaaAcq",
                        "title": "non",
                        "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
                        "authors": [
                            "Leo Tolstoy"
                        ],
                        "publishedDate": 2011,
                        "description": "nec scelerisque id cursus placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris  platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
                        "pageCount": 65,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
                        "language": "he",
                        "listPrice": {
                            "amount": 90,
                            "currencyCode": "USD",
                            "isOnSale": false
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "9laHCEdSpFy",
                        "title": "tristique",
                        "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
                        "authors": [
                            "Dr. Seuss"
                        ],
                        "publishedDate": 1999,
                        "description": "magna quisque placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
                        "pageCount": 299,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/11.jpg",
                        "language": "he",
                        "listPrice": {
                            "amount": 176,
                            "currencyCode": "EUR",
                            "isOnSale": false
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "nGhVwZvGCGp",
                        "title": "urna ornare gravida",
                        "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
                        "authors": [
                            "Jin Yong"
                        ],
                        "publishedDate": 2011,
                        "description": "porttitor nisl placerat nisi sodales suscipit tellus tincidunt mauris  placerat nisi sodales suscipit tellus tincidunt mauris  sodales id eu tellus venenatis laoreet auctor dictumst nulla",
                        "pageCount": 803,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
                        "language": "sp",
                        "listPrice": {
                            "amount": 116,
                            "currencyCode": "USD",
                            "isOnSale": true
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "Q8Q9Lsd03BD",
                        "title": "consequat neque volutpat",
                        "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
                        "authors": [
                            "Dr. Seuss"
                        ],
                        "publishedDate": 1978,
                        "description": "curabitur bibendum in placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris  dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
                        "pageCount": 891,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/5.jpg",
                        "language": "en",
                        "listPrice": {
                            "amount": 145,
                            "currencyCode": "EUR",
                            "isOnSale": false
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "bd7a76kARao",
                        "title": "risus",
                        "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
                        "authors": [
                            "Danielle Steel"
                        ],
                        "publishedDate": 2018,
                        "description": "auctor ametplacerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris   nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
                        "pageCount": 86,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
                        "language": "sp",
                        "listPrice": {
                            "amount": 157,
                            "currencyCode": "ILS",
                            "isOnSale": true
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "qKyG0vqeO3e",
                        "title": "interdum etiam vulputate",
                        "subtitle": "velit sapien eget tincidunt nunc tortor",
                        "authors": [
                            "Danielle Steel"
                        ],
                        "publishedDate": 2018,
                        "description": "aenean mauris placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris  porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
                        "pageCount": 882,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/17.jpg",
                        "language": "sp",
                        "listPrice": {
                            "amount": 57,
                            "currencyCode": "USD",
                            "isOnSale": true
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "2RvT48ZNInj",
                        "title": "sagittis justo",
                        "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
                        "authors": [
                            "Agatha Christie"
                        ],
                        "publishedDate": 2011,
                        "description": "nec faucibus arcu placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris  suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
                        "pageCount": 598,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
                        "language": "en",
                        "listPrice": {
                            "amount": 167,
                            "currencyCode": "ILS",
                            "isOnSale": false
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "5z2s9pDXAYj",
                        "title": "quam ullamcorper himenaeos",
                        "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
                        "authors": [
                            "Danielle Steel"
                        ],
                        "publishedDate": 1999,
                        "description": "etiam nec aliquamplacerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris   euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
                        "pageCount": 608,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
                        "language": "he",
                        "listPrice": {
                            "amount": 150,
                            "currencyCode": "USD",
                            "isOnSale": true
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "zBZu5cDEWha",
                        "title": "quis",
                        "subtitle": "suscipit turpis etiam turpis libero lobortis",
                        "authors": [
                            "Jin Yong"
                        ],
                        "publishedDate": 2011,
                        "description": "etiam pretium urna fusce lobortis curae viverra aptentplacerat nisi sodales suscipit tellus tincidunt mauris  metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
                        "pageCount": 583,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
                        "language": "en",
                        "listPrice": {
                            "amount": 58,
                            "currencyCode": "ILS",
                            "isOnSale": true
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "aOI7tQuPZ2f",
                        "title": "aliquam aliquet dapibus",
                        "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
                        "authors": [
                            "Leo Tolstoy"
                        ],
                        "publishedDate": 2011,
                        "description": "dolor morbi placerat nisi sodales suscipit tellus tincidunt mauris  placerat nisi sodales suscipit tellus tincidunt mauris  malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
                        "pageCount": 497,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
                        "language": "en",
                        "listPrice": {
                            "amount": 78,
                            "currencyCode": "USD",
                            "isOnSale": false
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "WBooB82Uvwu",
                        "title": "class",
                        "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
                        "authors": [
                            "Danielle Steel"
                        ],
                        "publishedDate": 1999,
                        "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque placerat nisi sodales suscipit tellus tincidunt mauris  elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
                        "pageCount": 804,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
                        "language": "en",
                        "listPrice": {
                            "amount": 118,
                            "currencyCode": "ILS",
                            "isOnSale": false
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "xm1z5bbZjlS",
                        "title": "vitae",
                        "subtitle": "class habitant at commodo semper ligula a bibendum",
                        "authors": [
                            "Leo Tolstoy"
                        ],
                        "publishedDate": 1999,
                        "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
                        "pageCount": 231,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
                        "language": "he",
                        "listPrice": {
                            "amount": 60,
                            "currencyCode": "EUR",
                            "isOnSale": false
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "u3j6QIKLlJb",
                        "title": "rhoncus vivamus",
                        "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
                        "authors": [
                            "Agatha Christie"
                        ],
                        "publishedDate": 1978,
                        "description": "torquent in et id placerat nisi sodales suscipit tellus tincidunt mauris  placerat nisi sodales suscipit tellus tincidunt mauris  lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
                        "pageCount": 652,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
                        "language": "he",
                        "listPrice": {
                            "amount": 110,
                            "currencyCode": "USD",
                            "isOnSale": true
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    },
                    {
                        "id": "vxYYYdVlEH3",
                        "title": "donec mi ullamcorper",
                        "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
                        "authors": [
                            "William Shakespeare"
                        ],
                        "publishedDate": 2011,
                        "description": "aliquet euismod placerat nisi sodales suscipit tellus tincidunt mauris placerat nisi sodales suscipit tellus tincidunt mauris  mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
                        "pageCount": 904,
                        "categories": [
                            "Computers",
                            "Hack"
                        ],
                        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
                        "language": "sp",
                        "listPrice": {
                            "amount": 186,
                            "currencyCode": "ILS",
                            "isOnSale": true
                        },
                        reviews: [{
                            name: 'Dani',
                            rate: 2,
                            createAt: '2021/6/21,16:56',
                            reviewText: 'its a Good Book😍'
                        }]
                    }
                ]
                return storageService.postMany(BOOKS_KEY, booksToSave)
            } else return books;
        })
}

function getById(id) {
    return storageService.get(BOOKS_KEY, id);
}

function addReview(book, review) {
    console.log(book);
    if (!review.name) review.name = 'Books Reader';
    book.reviews.push(review);
    return storageService.put(BOOKS_KEY, book);
}