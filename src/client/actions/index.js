// import { todoApi } from "../api";
// instead using mockAPI, now we use fetch method to fetch data from backend
// more details can be found in fetch API
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// fetch(URL,(OPTIONAL:AJAX))

import { ajaxConfighelper } from "../helper";

// the following URL is not needed in this case
// const baseURL = "localhost:3002"
// we need to chnage proxy, which should be added to package.json
// front-end 3000
// back-end 3002

// get method
export const initTodos = (dispatch) => async () => {
  try {
    const response = await fetch("/allTodos");
    const result = await response.json();
    dispatch({
      type: "INIT",
      payload: [...result],
    });
  } catch (e) {
    // erro handling code here
    console.log(e);
  }
};

// post method
export const addTodo = (dispatch) => async (content) => {
  try {
    const response = await fetch(
      "/addTodo",
      ajaxConfighelper({
        content,
        isCompleted: false,
      })
    );
    const result = await response.json();
    console.log(result);
    dispatch({
      type: "ADD",
      payload: {
        content,
        isCompleted: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const delTodo = (dispatch) => async (index) => {
  try {
    const response = await fetch("/delTodo", ajaxConfighelper({ index }));
    const result = await response.json();
    console.log(result);
    dispatch({
      type: "DEL",
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};

export const modTodo = (dispatch) => async (index) => {
  try {
    const response = await fetch("/modTodo", ajaxConfighelper({ index }));
    const result = await response.json();
    console.log(result);
    dispatch({
      type: "MOD",
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};
