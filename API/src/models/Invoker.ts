import Command from "./Command";
import { taskType } from "./Task";

class Invoker {
  //here we mark task_id as optional to pass it into execute function
  public invokeCommand(Command: Command, task_id?: number, task?: taskType) {
    //get the result from the command
    const result = Command.execute(task_id, task);
    return result;
  }
}

export default Invoker;
