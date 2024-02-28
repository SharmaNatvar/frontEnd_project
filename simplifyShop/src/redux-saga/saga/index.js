import { all } from "redux-saga/effects";
import {
  createItemSaga,
  createProductItemSaga,
  deleteItemSaga,
  readItemSaga,
  readProductItemSaga,
  updateItemSaga,
  updateProductItemSaga,
} from "./root/rootAdmin";

export function* rootSaga() {
  yield all([
    createItemSaga(),
    readItemSaga(),
    deleteItemSaga(),
    updateItemSaga(),
    createProductItemSaga(),
readProductItemSaga(),
updateProductItemSaga()
  ]);
}
