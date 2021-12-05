import Command from "../Command";
import Task from "../Task";
import { taskType } from "../Task";

class Read implements Command {
  private readTask: Task;

  constructor(Task: Task) {
    this.readTask = Task;
  }

  //return a result of all the tasks
  execute(): Promise<taskType[]> {
    const result = this.readTask.index();
    return result;
  }
}

export default Read;
