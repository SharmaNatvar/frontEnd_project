import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from "./rootReducer";


const sagaMiddlware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddlware)
)

// sagaMiddlware.run()

export default store