import { all } from "redux-saga/effects";
import { createItemSaga, deleteItemSaga, readItemSaga, updateItemSaga } from "./root/rootAdmin";

export function* rootSaga(){
    yield all([createItemSaga() , readItemSaga() , deleteItemSaga(), updateItemSaga()])
}