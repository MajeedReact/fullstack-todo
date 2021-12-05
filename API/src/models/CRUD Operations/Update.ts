import Command from "../Command";
import Task from "../Task";
import { taskType } from "../Task";

class Update implements Command {
  private task: Task;

  constructor(task: Task) {
    this.task = task;
  }

  execute(_task_id: number, t: taskType) {
    this.task.update(t);
  }
}

export default Update;
