export class Task {
  id: number;
  title: String;
  description: String;
  duedate: String;
  priority: String;

  constructor() {
    this.id = 1;
    this.title = '';
    this.description = '';
    this.duedate = new Date().toISOString();
    this.priority = '';
  }
}
