import { createReducer, on } from '@ngrx/store';

import {addAnimal} from "./animals.actions";

export interface Animal {
  name: string,
  color: string,
}

export const initialState: Animal[] = [{
  name: 'Cat',
  color: 'orange'
}];

export const animalsReducer = createReducer(
  initialState,
  on(addAnimal, (state, animal) => [...state, animal])
);
