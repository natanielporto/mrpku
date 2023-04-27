import { openDatabase, WebSQLDatabase } from "expo-sqlite";

export class Database {
  private static _instance: Database;
  private db: WebSQLDatabase;

  private constructor() {
    this.db = openDatabase("mrpku.db");
    this.initDatabase();
  }

  static get instance() {
    if (!this._instance) this._instance = new Database();

    return this._instance;
  }

  private async initDatabase() {
    const sqls = [
      `CREATE TABLE IF NOT EXISTS config (
        version text not null,
        last_update text not null
      );`,
      `CREATE TABLE IF NOT EXISTS recipe (
        id text not null primary key,
        name text not null,
        image text,
        ingredients text not null,
        preparation text not null,
        category text not null,
        extra text
      )`,
    ];

    await Promise.all(sqls.map((sql) => this.sql(sql)));
  }

  get connection() {
    return this.db;
  }

  async sql<T>(
    query: string,
    params?: (string | number | null)[]
  ): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.transaction((tx) => {
        tx.executeSql(
          query,
          params,
          (_, { rows }) => {
            resolve(rows._array as T[]);
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }
}
