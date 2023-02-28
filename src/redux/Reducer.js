import {
  ADD_TODO,
  COMPLETE,
  DELETE_TODO,
  EDIT_TODO,
  FILTER,
} from "./ActionType";

const init = {
  tasks: [
    { id: Math.random(), skill: "Learn MongoDB", istermine: false },
    { id: Math.random(), skill: "Learn CSS", istermine: true },
    { id: Math.random(), skill: "Learn HOOKS", istermine: true },
    { id: Math.random(), skill: "Learn SQL", istermine: false },
  ],
  filter: false,
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE_TODO:
      return { ...state, tasks: state.tasks.filter((el) => el.id !== payload) };
    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, istermine: !el.istermine } : el
        ),
      };
    case ADD_TODO:
      return { ...state, tasks: [...state.tasks, payload] };
    case FILTER:
      return { ...state, filter: !state.filter };
    case EDIT_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((el) => (el.id === payload.id ? payload : el)),
        ],
      };
    default:
      return state;
  }
};
export default reducer;
