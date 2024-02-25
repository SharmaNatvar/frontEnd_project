// In your saga root:
// export function* rootSaga() {
//     yield takeLatest('CREATE_ITEM_REQUEST', createItem);
//     yield takeLatest('READ_ITEMS_REQUEST', readItemsSaga);
//     yield takeLatest('UPDATE_ITEM_REQUEST', updateItemSaga);
//     yield takeLatest('DELETE_ITEM_REQUEST', deleteItemSaga);
//   }

import { takeLatest } from "redux-saga/effects";
import { CREATE_EMPLOY_PENDING, READ_EMPLOY_PENDING } from "../../admin/action/action";
import { createItem, readItems } from "../admin/adminSaga";


// create data
export function* createItemSaga(){
    yield takeLatest(CREATE_EMPLOY_PENDING , createItem);
} 


// read data
export function* readItemSaga(){
    yield takeLatest(READ_EMPLOY_PENDING , readItems);
} 