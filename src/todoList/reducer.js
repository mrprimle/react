export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newTasks = [...state.taskList, action.payload];
    return {
      ...state,
      taskList: newTasks,
      modalDescription: "task added!",
      showModal: true,
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      showModal: true,
      modalDescription: "please, enter value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModal: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newTaskList = state.taskList.filter((task) => {
      return task.id !== action.payload;
    });

    return { ...state, taskList: newTaskList };
  }
  return state;
};
