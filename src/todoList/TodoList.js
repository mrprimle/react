import React, { useReducer, useState } from "react";
import Modal from "./Modal";
import { data } from "../data";
import { reducer } from "./reducer";

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
          {state.taskList.length ? (
            <h3>Your tasks({state.taskList.length}) for today:</h3>
          ) : (
            <div></div>
          )}

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
