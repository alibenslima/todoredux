import {
  ADD_TODO,
  COMPLETE,
  DELETE_TODO,
  EDIT_TODO,
  FILTER,
} from "./ActionType";

export const DELETE = (Taskid) => {
  return {
    type: DELETE_TODO,
    payload: Taskid,
  };
};
export const COMP = (Taskid) => {
  return {
    type: COMPLETE,
    payload: Taskid,
  };
};

export const ADD = (newskill) => {
  return {
    type: ADD_TODO,
    payload: newskill,
  };
};
export const FILT = () => {
  return {
    type: FILTER,
  };
};
export const EDIT = (newskill) => {
  return {
    type: EDIT_TODO,
    payload: newskill,
  };
};
