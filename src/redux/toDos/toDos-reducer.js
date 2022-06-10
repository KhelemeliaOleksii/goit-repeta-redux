import { combineReducers } from "redux";
// import todosTypes from "./toDos-types";
import toDoActions from "./toDos-actions";
import { createReducer } from "@reduxjs/toolkit";

const itemsReducer = createReducer([], {
    [toDoActions.addToDo]: (state, { payload }) => [payload, ...state],
    [toDoActions.removeToDo]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    [toDoActions.toggleToDoActivity]: (state, { payload }) => {
        console.log("toggle by id", payload);
        return state.map(item => {
            if (item.id === payload) {
                return {
                    ...item,
                    isDone: !item.isDone,
                }
            }
            return item;
        })

    }
});

// const itemsReducer = (state = [], { type, payload }) => {
//     switch (type) {
//         case todosTypes.ADD:
//             return [payload, ...state];
//         case todosTypes.REMOVE:
//             return state.filter(({ id }) => id !== payload)
//         default:
//             return state;
//     }

// }

const filterReducer = createReducer('', {
    [toDoActions.filterToDO]: (_, { payload }) => payload,
})
// const filterReducer = (state = '', { type, payload }) => {
//     switch (type) {
//         case todosTypes.CHANGE_FILTER: {
//             return payload;
//         }
//         default:
//             return state;
//     }
// }

export const todosReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
})
