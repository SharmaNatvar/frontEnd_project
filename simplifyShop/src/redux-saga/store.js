import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from "./rootReducer";
import { rootSaga } from "./saga";


const sagaMiddlware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddlware)
)

sagaMiddlware.run(rootSaga)

export default store