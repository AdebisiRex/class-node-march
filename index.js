// import express from "express" //es6
const express = require("express"); //es5

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

const {
  appStart,
  runIndex,
  getUserById,
  createUser,
  viewUsers,
} = require("./controllers/app.controller");

app.listen(2350, appStart);

// app.get("/", runIndex);


const userRouter = require("./routes/users.routes")
app.use("/users", userRouter )

//using param
app.get("/get-user-by-id/:id", getUserById);



app.get("/account", viewUsers );
