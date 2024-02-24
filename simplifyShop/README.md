# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// Create
function* createItemSaga({ payload }) {
  try {
    const ref = firebase.firestore().collection('yourCollection');
    yield call([ref, 'add'], payload);
    yield put({ type: 'CREATE_ITEM_SUCCESS', payload });
  } catch (error) {
    yield put({ type: 'CREATE_ITEM_FAILURE', payload: error });
  }
}

// Read
function* readItemsSaga() {
  try {
    const ref = firebase.firestore().collection('yourCollection');
    const snapshot = yield call([ref, 'get']);
    const items = snapshot.docs.map(doc => doc.data());
    yield put({ type: 'READ_ITEMS_SUCCESS', payload: items });
  } catch (error) {
    yield put({ type: 'READ_ITEMS_FAILURE', payload: error });
  }
}

// Update
function* updateItemSaga({ payload }) {
  try {
    const ref = firebase.firestore().collection('yourCollection').doc(payload.id);
    yield call([ref, 'update'], payload.data);
    yield put({ type: 'UPDATE_ITEM_SUCCESS', payload });
  } catch (error) {
    yield put({ type: 'UPDATE_ITEM_FAILURE', payload: error });
  }
}

// Delete
function* deleteItemSaga({ payload }) {
  try {
    const ref = firebase.firestore().collection('yourCollection').doc(payload.id);
    yield call([ref, 'delete']);
    yield put({ type: 'DELETE_ITEM_SUCCESS', payload });
  } catch (error) {
    yield put({ type: 'DELETE_ITEM_FAILURE', payload: error });
  }
}

// In your saga root:
export function* rootSaga() {
  yield takeLatest('CREATE_ITEM_REQUEST', createItemSaga);
  yield takeLatest('READ_ITEMS_REQUEST', readItemsSaga);
  yield takeLatest('UPDATE_ITEM_REQUEST', updateItemSaga);
  yield takeLatest('DELETE_ITEM_REQUEST', deleteItemSaga);
}



const initialState = {
  items: [], // Replace with your initial data structure
  loading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_ITEM_SUCCESS':
      return {
        ...state,
        items: [...state.items, action.payload], // Add new item to the list
        loading: false,
        error: null,
      };
    case 'READ_ITEMS_SUCCESS':
      return {
        ...state,
        items: action.payload, // Replace entire list with fetched items
        loading: false,
        error: null,
      };
    // ... Add cases for other actions (UPDATE_ITEM_SUCCESS, DELETE_ITEM_SUCCESS, error handling, etc.)
    default:
      return state;
  }
}

