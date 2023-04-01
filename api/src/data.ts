const books = [
  {
    id: '1',
    title: 'The Awakening',
    author: 'Kate Chopin',
    url: 'https://m.media-amazon.com/images/I/41VHyX7o+LL._SL160_.jpg',
    description: 'The Awakening is a novel by Kate Chopin, first published in 1899. Set in New Orleans and on the Louisiana Gulf coast at the end of the 19th century.',
    categoryId: '1',
  },
  {
    id: '2',
    title: 'City of Glass',
    author: 'Paul Auster',
    url: 'https://images.isbndb.com/covers/36/05/9780312423605.jpg',
    description: 'City of Glass is a 1985 novel by American writer Paul Auster. It is the third book in Auster\'s New York Trilogy, preceded by Ghosts and The Locked Room. The novel is a detective story, and is set in New York City. The novel was adapted into a film of the same name in 1998.',
    categoryId: '1',
  },{
    id: '3',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    url: 'https://images.isbndb.com/covers/82/27/9780547928227.jpg',
    description: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children\'s literature.',
    categoryId: '2',
  },
  {
    id: '4',
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    url: 'https://m.media-amazon.com/images/I/81XwoNcQbwS._AC_UY436_QL65_.jpg',
    description: 'The Brothers Karamasov is a murder mystery, a courtroom drama, and an exploration of erotic rivalry in a series of triangular love affairs involving the “wicked and sentimental” Fyodor Pavlovich Karamazov and his three sons―the impulsive and sensual Dmitri; the coldly rational Ivan; and the healthy, red-cheeked young novice Alyosha. Through the gripping events of their story, Dostoevsky portrays the whole of Russian life, is social and spiritual striving, in what was both the golden age and a tragic turning point in Russian culture.',
    categoryId: '3',
  },
  {
    id: '5',
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    url: 'https://m.media-amazon.com/images/I/41sUdLMtUuL.jpg',
    description: 'War and Peace is a novel by the Russian author Leo Tolstoy. It is regarded as a central work of world literature and one of Tolstoys finest literary achievements. The novel chronicles the history of the French invasion of Russia and the impact of the Napoleonic era on Tsarist society through the stories of five Russian aristocratic families. Portions of an earlier version, titled The Year 1805, were serialized in The Russian Messenger from 1865 to 1867',
    categoryId: '3',
  },
  {
    id: '6',
    title: 'Gullivers Travels',
    author: 'Jonathan Swift',
    url: 'https://m.media-amazon.com/images/I/41kLr-bPQIL._SY346_.jpg',
    description: 'Gulliver’s Travels, original title Travels into Several Remote Nations of the World, four-part satirical work by Anglo-Irish author Jonathan Swift, published anonymously in 1726 as Travels into Several Remote Nations of the World. A keystone of English literature, it was one of the books that gave birth to the novel form, though it did not yet have the rules of the genre as an organizing tool. A parody of the then popular travel narrative, Gulliver’s Travels combines adventure with savage satire, mocking English customs and the politics of the day.',
    categoryId: '2',
  },
];

const categories = [
  {
    id: '1',
    name: 'Fantasy',
  },
  {
    id: '2',
    name: 'Science Fiction',
  },
  {
    id: '3',
    name: 'Horror',
  },
];
const ratings = [
  {
    id: '1',
    value: 5,
    title: 'Great',
    description: 'This book is great',
    bookId: '1',
  },
  {
    id: '2',
    value: 4,
    title: 'Good',
    description: 'This book is good',
    bookId: '1',
  },
];

export {
    books,
    categories,
    ratings,
};