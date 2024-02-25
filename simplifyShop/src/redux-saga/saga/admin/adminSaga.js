import { call, put } from 'redux-saga/effects';
// import { txtDB } from '../../../config/firebaseConfig';
import { CREATE_EMPLOY_FULFILLED, CREATE_EMPLOY_REJECTED, READ_EMPLOY_FULFILLED, READ_EMPLOY_REJECTED } from '../../admin/action/action';
import { handleCreate, handleRead } from '../../admin/Function/function';

// Create
export function* createItem(action) {
  try {
    // const res = txtDB.collection('items');
    console.log(action , 'adminsaga 0');
    const data = yield call( handleCreate , action);
    console.log(data , 'admin saga 1');
    yield put({ type: CREATE_EMPLOY_FULFILLED , data });
  } catch (error) {
    yield put({ type: CREATE_EMPLOY_REJECTED , err });
  }
}

// Read
export function* readItems(action) {
  try {
    console.log(action , 'adminsaga 0');
    const data = yield call(handleRead , action);
    console.log(data , 'adminsaga 0');
    yield put({ type: READ_EMPLOY_FULFILLED, data});
  } catch (error) {
    yield put({ type: READ_EMPLOY_REJECTED , data });
  }
}

// Update
// export function* updateItem({ payload }) {
//   try {
//     const ref = firebase.firestore().collection('items').doc(payload.id);
//     yield call([ref, 'update'], payload.data);
//     yield put({ type: 'UPDATE_ITEM_SUCCESS', payload });
//   } catch (error) {
//     yield put({ type: 'UPDATE_ITEM_FAILURE', payload: error });
//   }
// }

// Delete
// export function* deleteItem({ payload }) {
//   try {
//     const ref = firebase.firestore().collection('items').doc(payload.id);
//     yield call([ref, 'delete']);
//     yield put({ type: 'DELETE_ITEM_SUCCESS', payload });
//   } catch (error) {
//     yield put({ type: 'DELETE_ITEM_FAILURE', payload: error });
//   }
// }

