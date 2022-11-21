import { Book } from '../models/books.model';
import {Animal} from "./animals.reducer";

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  animals: ReadonlyArray<Animal>;
}
