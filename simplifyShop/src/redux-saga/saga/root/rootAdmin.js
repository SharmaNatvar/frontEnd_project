import { takeLatest } from "redux-saga/effects";
import { CREATE_EMPLOY_PENDING, CREATE_PRODUCT_PENDING, DELETE_EMPLOY_PENDING, READ_EMPLOY_PENDING, READ_PRODUCT_PENDING, UPDATE_EMPLOY_PENDING, UPDATE_PRODUCT_PENDING } from "../../admin/action/action";
import { createItem, createProductItem, deleteItem, readItems, readProductItems, updateItem, updateProductItem } from "../admin/adminSaga";


// create data
export function* createItemSaga(){
    yield takeLatest(CREATE_EMPLOY_PENDING , createItem);
} 


// read data
export function* readItemSaga(){
    yield takeLatest(READ_EMPLOY_PENDING , readItems);
} 

// delete data
export function* deleteItemSaga(){
    yield takeLatest(DELETE_EMPLOY_PENDING , deleteItem);
} 

// update data
export function* updateItemSaga(){
    yield takeLatest(UPDATE_EMPLOY_PENDING , updateItem);
} 




// Product create data
export function* createProductItemSaga(){
    yield takeLatest(CREATE_PRODUCT_PENDING , createProductItem);
} 


// Product read data
export function* readProductItemSaga(){
    yield takeLatest(READ_PRODUCT_PENDING, readProductItems);
} 


// Product update data
export function* updateProductItemSaga(){
    yield takeLatest(UPDATE_PRODUCT_PENDING , updateProductItem);
} 