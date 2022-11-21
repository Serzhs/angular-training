import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TasksApiService, Task} from "../../services/tasks-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[TasksApiService]
})

export class HomeComponent implements OnInit {
  tasks: Task[] = []
  inputValue: string = ""
  loading: boolean = false

  constructor(private tasksApiService:TasksApiService ) { }

  ngOnInit(): void {
    this.loading = true

    this.tasksApiService.getAllTasks().subscribe((data) => {
      this.tasks = data
      this.loading = false
    })
  }

  addTask() {
    this.loading = true

    const newTask: Task = {
      id: Date.now(),
      title: this.inputValue,
      completed: false
    }

    this.tasksApiService.createTask(newTask).subscribe(() => {
      this.tasks.push(newTask)

      this.loading = false
    })
  }

  deleteTask(id: number) {
    this.loading = true

    this.tasksApiService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id)

      this.loading = false
    })
  }

  completeTask(task: Task) {
    this.loading = true

    const taskIndex = this.tasks.findIndex(({id}) => id === task.id)
    const tasksPayload = {
      ...task,
      completed: true
    }

    this.tasksApiService.completeTask(tasksPayload).subscribe(() => {
      this.tasks[taskIndex].completed = true

      this.loading = false
    })
  }

}
