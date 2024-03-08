export interface User {
  name: string;
  email: string;
}

const db = [
  {
    name: "Dayana Daniel",
    email: "dayana@dio.com",
  },
];

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };

    this.db.push(user);
    console.log("DB actualizado", this.db);
  };

  getAllUsers = () => {
    return this.db;
  };

  deleteUser = (pos: number) => {
    // this.db.shift();
    this.db.splice(pos, 1);
    console.log("DB actualizado", this.db);
  };
}
