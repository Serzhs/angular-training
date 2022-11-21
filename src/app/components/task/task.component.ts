import {Component, Input, OnInit,Output, EventEmitter} from '@angular/core';
import {Task} from "../../services/tasks-api.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task
  @Output() onDelete = new EventEmitter()
  @Output() onComplete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
}
