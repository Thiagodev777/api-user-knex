import dotenv from "dotenv"
dotenv.config()
import knex from "knex"

knex({
  client: process.env.CLIENT,
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
})

export default knex
