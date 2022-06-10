import todosTypes from "./toDos-types";
import nextId from "react-id-generator";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction(todosTypes.ADD, (data) => ({
    payload: {
        id: nextId(),
        content: data.content,
        isDone: false,
    }
}))
const removeToDo = createAction(todosTypes.REMOVE);

const toggleToDoActivity = createAction(todosTypes.TOGGLE);

const filterToDO = createAction(todosTypes.CHANGE_FILTER);

const toDoActions = {
    addToDo,
    removeToDo,
    filterToDO,
    toggleToDoActivity,
}

export default toDoActions;