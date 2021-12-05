import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../services/task.service';

@Component({
  //selector is the unique modifer
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  //create a list of task objects

  taskList: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.taskService.getTasks().subscribe((res) => {
      this.taskList = res;
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe((res) => {
      this.getAllTasks();
    });
  }
}
