import dotenv from "dotenv";
import { Pool } from "pg";

//loads env variables
dotenv.config();

class database {
  private static instance: database;
  private database() {}
  public static getInstance(): database {
    //if the instance equal null then create a new instance else return the same instance
    if (this.instance == null) this.instance = new database();

    return database.instance;
  }
  public connectToDB(): Pool {
    const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } =
      process.env;

    const client = new Pool({
      host: POSTGRES_HOST,
      database: POSTGRES_DB,
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
    });
    return client;
  }
}

export default database;
