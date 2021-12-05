import { taskType } from "./Task";

interface Command {
  //to tell the function task_id is an optional parameter and we dont need to use it in each function
  execute(task_id?: number, task?: taskType): void;
}

export default Command;
