import { call, put } from 'redux-saga/effects';
import { CREATE_EMPLOY_FULFILLED, CREATE_EMPLOY_REJECTED, CREATE_PRODUCT_FULFILLED, CREATE_PRODUCT_REJECTED, DELETE_EMPLOY_FULFILLED, DELETE_EMPLOY_REJECTED, READ_EMPLOY_FULFILLED, READ_EMPLOY_REJECTED, READ_PRODUCT_FULFILLED, READ_PRODUCT_REJECTED, UPDATE_EMPLOY_FULFILLED, UPDATE_EMPLOY_REJECTED, UPDATE_PRODUCT_FULFILLED, UPDATE_PRODUCT_REJECTED } from '../../admin/action/action';
import { handleCreate, handleDelete, handleProductCreate, handleProductRead, handleProductUpate, handleRead, handleUpate } from '../../admin/Function/function';

// Create
export function* createItem(action) {
  try {
    const data = yield call( handleCreate , action);
    yield put({ type: CREATE_EMPLOY_FULFILLED , data });
  } catch (error) {
    yield put({ type: CREATE_EMPLOY_REJECTED , error });
  }
}

// Read
export function* readItems(action) {
  try {
    const data = yield call(handleRead , action);
    yield put({ type: READ_EMPLOY_FULFILLED, data});
  } catch (error) {
    yield put({ type: READ_EMPLOY_REJECTED , error });
  }
}

// Delete
export function* deleteItem(action) {
  try {
    const data = yield call(handleDelete , action);
    yield put({ type: DELETE_EMPLOY_FULFILLED, data });
  } catch (error) {
    yield put({ type: DELETE_EMPLOY_REJECTED, error});
  }
}

// Update
export function* updateItem(action) {
  try {
    const data = yield call(handleUpate , action);
    yield put({ type: UPDATE_EMPLOY_FULFILLED , data });
  } catch (error) {
    yield put({ type: UPDATE_EMPLOY_REJECTED , error });
  }
}




// Product Create
export function* createProductItem(action) {
  try {
    const data = yield call( handleProductCreate , action);
    yield put({ type: CREATE_PRODUCT_FULFILLED , data });
  } catch (error) {
    yield put({ type: CREATE_PRODUCT_REJECTED , error });
  }
}

// Product Read
export function* readProductItems(action) {
  try {
    const data = yield call(handleProductRead , action);
    yield put({ type: READ_PRODUCT_FULFILLED, data});
  } catch (error) {
    yield put({ type: READ_PRODUCT_REJECTED , error });
  }
}

// Product Update
export function* updateProductItem(action) {
  try {
    const data = yield call(handleProductUpate , action);
    yield put({ type: UPDATE_PRODUCT_FULFILLED , data });
  } catch (error) {
    yield put({ type: UPDATE_PRODUCT_REJECTED , error });
  }
}