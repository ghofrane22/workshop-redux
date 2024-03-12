import { createStore } from "redux";
import { TaskReducer } from "../Reducers/TaskReducer";

const store = createStore(TaskReducer);

export default store;
