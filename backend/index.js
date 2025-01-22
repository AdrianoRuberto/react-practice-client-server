import express from 'express'
import {getAllUsers} from "./database.js";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.get("/users", (req, res) => {
  const users = getAllUsers();
  res.send(users)
});

app.listen(port, () => {
  console.log(`backend listening on port ${port}`)
});