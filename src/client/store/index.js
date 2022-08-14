// 导入createStore，可创建store
// 导入applyMiddleWare，一个中间层，给thunk异步操作使用
import { createStore, applyMiddleware } from "redux";
// import thunk for async operations
import thunk from "redux-thunk";
// 导入reducer
import { reducer } from "../reducers/index";

// 导出store基于reducer，将global state存储在store内
// 同时将一些异步操作存储在store内，使得action可以进行异步操作
export const store = createStore(reducer, applyMiddleware(thunk));
