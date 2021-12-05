import Command from "../Command";
import Task from "../Task";
import { taskType } from "../Task";

class Create implements Command {
  private task: Task;

  constructor(task: Task) {
    this.task = task;
  }

  execute(_task_id: number, t: taskType) {
    this.task.create(t);
  }
}

export default Create;
