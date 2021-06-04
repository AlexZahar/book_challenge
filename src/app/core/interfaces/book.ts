import { GenreType } from '../enums/genres-type';

export interface Book {
  _id?: string;
  author?: string;
  title?: string;
  cover?: string;
  genres?: GenreType[];
  synopsis?: string;
  releaseDate?: string;
  editable?: boolean;
  deletable?: boolean;
}
