import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {getAllAnimals} from "../../state/animals.selectors";
import {addAnimal} from "../../state/animals.actions";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals$ = this.store.select(getAllAnimals);

  constructor(  private store: Store) { }

  ngOnInit(): void {
    this.animals$.subscribe((a) => {
      console.log(a)
    })
  }

  addAnimal() {
    console.log(77)
    this.store.dispatch(addAnimal({
        name: "cow", color: "brown"
    }));
  }

}
