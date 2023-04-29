import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import counterReducer from './reducers/counter'
import usersReducer from './reducers/users'
import { rootSaga } from './saga/rootSaga'


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: { counter: counterReducer, users: usersReducer },
    middleware: [sagaMiddleware]
})


sagaMiddleware.run(rootSaga)