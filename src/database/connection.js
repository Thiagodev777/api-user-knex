import knex from "knex"

knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "usertest",
  },
})

export default knex
