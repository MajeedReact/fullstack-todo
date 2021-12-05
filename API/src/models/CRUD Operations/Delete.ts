import Command from "../Command";
import Task from "../Task";

class Delete implements Command {
  private task: Task;

  constructor(task: Task) {
    this.task = task;
  }

  execute(task_id: number) {
    this.task.delete(task_id);
  }
}

export default Delete;
