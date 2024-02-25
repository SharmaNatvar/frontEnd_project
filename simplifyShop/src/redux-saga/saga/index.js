import { all } from "redux-saga/effects";
import { createItemSaga, readItemSaga } from "./root/rootAdmin";

export function* rootSaga(){
    console.log('this is from root saga');
    yield all([createItemSaga() , readItemSaga()])
}