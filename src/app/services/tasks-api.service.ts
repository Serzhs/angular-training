import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Task {
  "id": number,
  "title": string,
  "completed": boolean
}

export interface Comment {
  "id": number,
  "body": string,
}

@Injectable({
  providedIn: 'root'
})

// Content-Type: application/json

export class TasksApiService {
  configUrl = (type: 'tasks' | 'comments') => `http://localhost:3000/${type}`;

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get<Task[]>(this.configUrl("tasks"));
  }

  createTask(task: Task) {
    return this.http.post(this.configUrl("tasks"), task)
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.configUrl("tasks")}/${id}`)
  }

  completeTask(task: Task) {
    return this.http.put(`${this.configUrl("tasks")}/${task.id}`, task)
  }

  getAllComments() {
    return this.http.get<Task[]>(this.configUrl("tasks"));
  }
}
