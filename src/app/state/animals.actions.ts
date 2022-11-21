import { createAction, props } from '@ngrx/store';
import { Animal } from './animals.reducer';

export const addAnimal = createAction(
  'Add Animal',
  props<Animal>()
);
