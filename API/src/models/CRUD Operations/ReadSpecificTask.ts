import Command from "../Command";
import { taskType } from "../Task";
import Task from "../Task";

class ReadSpecificTask implements Command {
  private readTask: Task;

  constructor(readTask: Task) {
    this.readTask = readTask;
  }

  execute(task_id: number): Promise<taskType> {
    const result = this.readTask.show(task_id);
    return result;
  }
}
export default ReadSpecificTask;
