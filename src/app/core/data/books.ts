import { Book } from '../interfaces/book';
import { GenreType } from '../enums/genres-type';

export const BOOKS: Book[] = [
  {
    _id: '0001',
    author: 'Ralph Ellison',
    title: 'Invisible Man',
    genres: [GenreType.Literature, GenreType.Fiction],
    synopsis:
      'The novel addresses many of the social and intellectual issues facing African-Americans in the early twentieth century, including black nationalism, the relationship between black identity and Marx...',
    releaseDate: 'April 14, 1952',
    editable: false,
    deletable: false,
  },
  {
    _id: '0002',
    author: 'Jonathan Swift',
    title: "Gulliver's Travels",
    genres: [GenreType.Fantasy, GenreType.Childrens, GenreType.Adventure],
    synopsis:
      'During his first voyage, Gulliver is washed ashore after a shipwreck and finds himself a prisoner of a race of tiny people, less than 6 inches (15 cm) tall, who are inhabitants of the island country of Lilliput.',
    releaseDate: 'October 28, 1726',
    editable: false,
    deletable: false,
  },
  {
    _id: '0003',
    author: 'Charles Dickens',
    title: 'David Copperfield ',
    genres: [GenreType.History, GenreType.Adventure],
    synopsis:
      'The story follows the life of David Copperfield from childhood to maturity. David was born in Blunderstone, Suffolk, England, six months after the death of his father. David spends his early years in relative happiness with his loving, childish mother and their kindly housekeeper, Clara Peggotty.',
    releaseDate: 'May 11, 1849',
    editable: false,
    deletable: false,
  },
];
