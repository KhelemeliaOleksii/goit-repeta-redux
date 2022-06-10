import { combineReducers } from "redux";
import { counterReducer } from "./counter/counter-reducer";
import { todosReducer } from "./toDos/toDos-reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";

const todoPersistConfig = {
    key: 'todos',
    storage,
    blacklist: ['filter'],
}

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: persistReducer(todoPersistConfig, todosReducer),
});

const rootPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['todos', 'counter']
}
const rootPersistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default rootPersistedReducer;