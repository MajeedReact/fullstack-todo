import express, { Request, Response } from "express";
import Create from "../models/CRUD Operations/Create";
import Delete from "../models/CRUD Operations/Delete";
import Invoker from "../models/Invoker";
import Read from "../models/CRUD Operations/Read";
import ReadSpecificTask from "../models/CRUD Operations/ReadSpecificTask";
import Task, { taskType } from "../models/Task";
import Update from "../models/CRUD Operations/Update";

//creating object task so we can pass it into the CRUDS
const task: Task = new Task();

//CRUD
const read: Read = new Read(task);
const create: Create = new Create(task);
const update: Update = new Update(task);
const deleteTask: Delete = new Delete(task);
const readSpecificTask = new ReadSpecificTask(task);

const invoker: Invoker = new Invoker();

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await invoker.invokeCommand(read);
    res.json(tasks);
  } catch (err) {
    throw new Error(`An Error occured retriving the tasks: ${err}`);
  }
};

const showTask = async (req: Request, res: Response): Promise<void> => {
  try {
    //get task id from the paramter in the url
    const task_id: number = req.params.id as unknown as number;
    //passing the requested task id to the function
    const tasks = await invoker.invokeCommand(readSpecificTask, task_id);

    res.json(tasks);
  } catch (err) {
    throw new Error(
      `An error occured retriving your task with id ${task}: ${err}`
    );
  }
};

//Creating a task
const createTask = async (req: Request, res: Response): Promise<void> => {
  //Create object of task
  const task: taskType = {
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
    //passing the requested task id to the function
    id: req.params.id as unknown as number,
  };
  //passing the requested task id to the function

  try {
    const tasks = await invoker.invokeCommand(create, task.id as number, task);
    res.json(`Sucessfully created task ${task.title}`);
  } catch (err) {
    throw new Error(`An error occured creating your task: ${err}`);
  }
};

const updateTask = async (req: Request, res: Response): Promise<void> => {
  //getting the updated values of task
  const task: taskType = {
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
    //passing the requested task id to the function
    id: req.params.id as unknown as number,
  };

  try {
    const tasks = await invoker.invokeCommand(update, task.id as number, task);
    res.json(`Sucessfully update task ${task.title}`);
  } catch (err) {
    throw new Error(`An error occured updating your task: ${err}`);
  }
};

const destroy = async (req: Request, res: Response): Promise<void> => {
  try {
    //get task id from the paramter in the url
    const task_id: number = req.params.id as unknown as number;
    //passing the requested task id to the function
    const tasks = await invoker.invokeCommand(deleteTask, task_id);

    res.json(`Sucessfully deleted task with id ${task_id}`);
  } catch (err) {
    throw new Error(
      `An error occured deleting your task with id ${task}: ${err}`
    );
  }
};

const todo_list_routes = (app: express.Application) => {
  app.get("/tasks", index);
  app.get("/tasks/:id", showTask);
  app.post("/tasks", createTask);
  app.put("/tasks/:id", updateTask);
  app.delete("/tasks/:id", destroy);
};

export default todo_list_routes;
