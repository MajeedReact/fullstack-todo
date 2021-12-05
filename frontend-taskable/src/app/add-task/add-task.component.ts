import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../model/Task';

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskDetails: Task = new Task();
  //these variables for the html form
  check: boolean = false;
  title: String = '';
  description: String = '';
  priority: String = '';
  duedate: String = new Date().toISOString();

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}

  submitTask() {
    this.taskDetails = {
      id: 0,
      title: this.title,
      description: this.description,
      duedate: this.duedate,
      priority: this.priority,
    };
    this.taskService.createTask(this.taskDetails).subscribe((res) => {
      this.taskService.getTasks();
    });

    this.router.navigate(['/']);
  }

  clicked() {
    this.check = true;
  }
}
