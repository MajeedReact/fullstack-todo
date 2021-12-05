import database from "../database";

//create instance of the database
const Client: database = database.getInstance();

//create a type of task so whenever we are returning a result from a function we can specify it is a taskType
export type taskType = {
  //id is marked as optional because it is auto increamental anyway in the database structure so we dont need to specify it
  id?: Number;
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
};

class Task {
  //get all the tasks
  async index(): Promise<taskType[]> {
    try {
      //connecting to the database
      const conn = await Client.connectToDB().connect();
      //querying
      const sql = "SELECT * FROM todo_list";
      //save the result in result variable
      const result = await conn.query(sql);
      //close database connection
      conn.release();
      //return all the rows
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get tasks! ${err}`);
    }
  }

  //get specifc task by their ID
  async show(task_id: number): Promise<taskType> {
    try {
      const conn = await Client.connectToDB().connect();

      const sql = "SELECT * FROM todo_list WHERE id = $1";

      const result = await conn.query(sql, [task_id]);

      conn.release();
      //return task
      return result.rows[0];
    } catch (err) {
      throw new Error(`Cannot get task with id${task_id}! ${err}`);
    }
  }

  async create(t: taskType): Promise<taskType> {
    const conn = await Client.connectToDB().connect();

    //inserting values into todo_list and returning the result once inserted
    const sql =
      "INSERT INTO todo_list(title, description, duedate, priority) VALUES ($1, $2, $3, $4) RETURNING *";

    const result = await conn.query(sql, [
      t.title,
      t.description,
      t.dueDate,
      t.priority,
    ]);

    conn.release();

    return result.rows[0];
  }

  async update(t: taskType): Promise<taskType> {
    const conn = await Client.connectToDB().connect();

    //inserting values into todo_list and returning the result once inserted
    const sql =
      "UPDATE todo_list SET title = $1, description = $2, duedate = $3, priority = $4 WHERE id = $5 RETURNING *";

    const result = await conn.query(sql, [
      t.title,
      t.description,
      t.dueDate,
      t.priority,
      t.id,
    ]);

    conn.release();

    return result.rows[0];
  }

  async delete(task_id: number): Promise<taskType> {
    const conn = await Client.connectToDB().connect();

    //inserting values into todo_list and returning the result once inserted
    const sql = "DELETE FROM todo_list WHERE id = $1";

    const result = await conn.query(sql, [task_id]);

    conn.release();

    return result.rows[0];
  }
}

export default Task;
