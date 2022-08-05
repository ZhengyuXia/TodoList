import { todoApi } from "../api";

export const initTodos = (dispatch) => async () => {
  try {
    const result = await todoApi.getAllTodos();
    console.log(result);
    dispatch({
      type: "INIT",
      payload: [...result],
    });
  } catch (e) {
    // erro handling code here
    console.log(e);
  }
};

export const addTodo = (dispatch) => async (content) => {
  try {
    const result = await todoApi.addTodo({ content, isCompleted: false });
    dispatch({
      type: "ADD",
      payload: {
        content,
        isCompleted: false,
      },
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export const delTodo = (dispatch) => async (index) => {
  try {
    const result = await todoApi.delTodo(index);
    dispatch({
      type: "DEL",
      payload: index,
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export const modTodo = (dispatch) => async (index) => {
  try {
    const result = await todoApi.modTodo(index);
    dispatch({
      type: "MOD",
      payload: index,
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
