var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// 1. allTodos => return all of the todos
// 2. addTodo => add a new todo in the BE
// 3. modTodo => update todos
// 4. delTodo => delete todo from BE

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// need to comment the following
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// 预建一个数据在BE
let todos = [
  { content: "write some code", isCompleted: false },
  { content: "watch some movies", isCompleted: false },
  { content: "listen some music", isCompleted: false },
];

// 判定逻辑
const verifyPayload = (isAllTodos, req) => {
  return isAllTodos
    ? req.body && req.body.content && req.body.isCompleted !== undefined
    : req.body && req.body.index >= 0 && req.body.index < todos.length;
};

// 1. allTodos(GET) => return all of the todos
// app.get(URL,handlers): 一旦用户访问了该URL,就会进行handler操作
// (req, res): req意思是request，可视作一些输入参数，pass到回调函数中；res意思是response，将回馈给前端的形式，JSON等
// 如果没有req，可以用 _ 表示
app.get("/allTodos", (_, res) => {
  console.log("retrive all todos");
  res.json(todos);
});

// 2. addTodo(POST) => add a new todo in the BE
// example: body => { content: "write some code", isCompleted: false }
app.post("/addTodo", (req, res) => {
  if (verifyPayload(true, req)) {
    todos = [...todos, req.body];
    res.json({ message: "succeed" });
    return;
  }
  res.json({ message: "failed" });
});

// 3. modTodo(POST) => update todos' status
// example: body => {index: number}
app.post("/modTodo", (req, res) => {
  if (verifyPayload(false, req)) {
    const index = req.body.index;
    todos[index].isCompleted = !todos[index].isCompleted;
    res.json({ message: "succeed" });
    return;
  }
  res.json({ message: "failed" });
});

// 4. delTodo(POST) => delete todo from BE
// example: body => {index: number}
app.post("/delTodo", (req, res) => {
  if (verifyPayload(false, req)) {
    const index = req.body.index;
    //todos.splice(index, 1);
    todos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    res.json({ message: "succeed" });
    return;
  }
  res.json({ message: "failed" });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
