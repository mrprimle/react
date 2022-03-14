import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import { data } from "../data";

const reducer = (state, action) => {
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
      modalDescription: "no value",
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

const defaultState = {
  showModal: false,
  modalDescription: "",
  taskList: data,
};

const TodoList = () => {
  // const [showModal, setShowModal] = useState(false);
  const [taskText, setTaskText] = useState("");
  // const [taskList, setTaskList] = useState(data);

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText) {
      const newTask = { id: new Date().getTime().toString(), taskText };
      dispatch({ type: "ADD_ITEM", payload: newTask });
      setTaskText("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      <div className="todo-wrap">
        <div className="form-wrap">
          {state.showModal && (
            <Modal
              closeModal={closeModal}
              modalDescription={state.modalDescription}
            />
          )}
          <form onSubmit={handleSubmit} className="form form-bg">
            <input
              type="text"
              value={taskText}
              onChange={(e) => {
                setTaskText(e.target.value);
              }}
            />
            <button type="submit" className="btn tinyMarginTop">
              Add task
            </button>
          </form>
        </div>
        <section className="todo-items">
          {state.taskList.map((task) => {
            return (
              <div key={task.id} className="item">
                <h4>{task.taskText}</h4>
                <button
                  onClick={() => {
                    dispatch({ type: "REMOVE_ITEM", payload: task.id });
                  }}
                >
                  remove
                </button>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default TodoList;
