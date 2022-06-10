// import { counterReducer } from './counter/counter-reducer';
// import { todosReducer } from './toDos/toDos-reducer'
import { configureStore } from '@reduxjs/toolkit';
//import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger';
import rootPersistedReducer from './rootReducer'
import {
    persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

// const rootPersistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['todos'],
// }

// const todoPersistConfig = {
//     key: 'todos',
//     storage,
//     // whitelist: ['items'],
// }
// const rootReducer = combineReducers({
//     counter: counterReducer,
//     todos: todosReducer,
// });

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
    reducer: rootPersistedReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger),
})

const persistedStore = {
    persistor: persistStore(store),
    store,
}

export default persistedStore
