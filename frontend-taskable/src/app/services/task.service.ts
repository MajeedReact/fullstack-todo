import { Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const api = 'http://localhost:3000/tasks';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //inject http client into the constructor
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(api);
  }

  getTaskById(id: String): Observable<Task> {
    return this.http.get<Task>(`${api}/${id}`);
  }

  createTask(Task: Task): Observable<Task> {
    return this.http.post<Task>(api, Task);
  }

  updateTask(Task: Task): Observable<Task> {
    return this.http.put<Task>(`${api}/${Task.id}`, Task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${api}/${id}`);
  }
}
