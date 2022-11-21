import {createFeatureSelector} from "@ngrx/store";
import {Animal} from "./animals.reducer";

export const getAllAnimals = createFeatureSelector<ReadonlyArray<Animal>>('animals');
