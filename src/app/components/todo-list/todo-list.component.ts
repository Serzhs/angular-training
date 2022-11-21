import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from "../../services/tasks-api.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() tasks!: Task[];
  @Output() onDelete = new EventEmitter<number>()
  @Output() onComplete = new EventEmitter<Task>()

  constructor() { }

  ngOnInit(): void {
  }
}
