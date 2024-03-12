import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  UPDATE_TASK,
} from "../Constants/actionType";

export let add_task = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export let done_task = (payload) => {
  return {
    type: DONE_TASK,
    payload,
  };
};
export let update_task = (payload) => {
  return {
    type: UPDATE_TASK,
    payload,
  };
};
export let delete_task = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};
