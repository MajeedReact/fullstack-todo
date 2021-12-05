import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../model/Task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  taskDetails: Task = new Task();
  title: String = '';
  description: String = '';
  priority: String = '';
  duedate: String = new Date().toISOString();

  //we use activated route to get the current route

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    //we take the id element from the route
    let id = this.route.snapshot.params['id'];
    this.getTask(id);
  }

  getTask(id: String): void {
    this.taskService.getTaskById(id).subscribe((res) => {
      this.taskDetails = res;
    });
  }

  updateTask() {
    this.taskDetails = {
      id: this.route.snapshot.params['id'],
      title: this.title,
      description: this.description,
      duedate: this.duedate,
      priority: this.priority,
    };
    this.taskService.updateTask(this.taskDetails).subscribe((res) => {
      this.taskService.getTasks();
    });
  }
}
