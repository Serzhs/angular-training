import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../models/books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
  >('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    const populatedBooks = collection.map((id) => {
      return books.find((book) => book.id === id)
    })

    return populatedBooks.filter((item) => item !== undefined) as Book[]
  }
);
