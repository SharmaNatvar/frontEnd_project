import { call, put } from 'redux-saga/effects';
import { CREATE_EMPLOY_FULFILLED, CREATE_EMPLOY_REJECTED, DELETE_EMPLOY_FULFILLED, DELETE_EMPLOY_REJECTED, READ_EMPLOY_FULFILLED, READ_EMPLOY_REJECTED, UPDATE_EMPLOY_FULFILLED, UPDATE_EMPLOY_REJECTED } from '../../admin/action/action';
import { handleCreate, handleDelete, handleRead, handleUpate } from '../../admin/Function/function';

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



