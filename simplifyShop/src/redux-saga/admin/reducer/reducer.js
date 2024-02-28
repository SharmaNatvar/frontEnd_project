import {
  CREATE_EMPLOY_FULFILLED,
  CREATE_EMPLOY_PENDING,
  CREATE_EMPLOY_REJECTED,
  CREATE_PRODUCT_FULFILLED,
  CREATE_PRODUCT_PENDING,
  CREATE_PRODUCT_REJECTED,
  DELETE_EMPLOY_FULFILLED,
  DELETE_EMPLOY_PENDING,
  DELETE_EMPLOY_REJECTED,
  READ_EMPLOY_FULFILLED,
  READ_EMPLOY_PENDING,
  READ_EMPLOY_REJECTED,
  READ_PRODUCT_FULFILLED,
  READ_PRODUCT_PENDING,
  READ_PRODUCT_REJECTED,
  UPDATE_EMPLOY_FULFILLED,
  UPDATE_EMPLOY_PENDING,
  UPDATE_EMPLOY_REJECTED,
  UPDATE_PRODUCT_FULFILLED,
  UPDATE_PRODUCT_PENDING,
  UPDATE_PRODUCT_REJECTED,
} from "../action/action";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // Employ read
    case READ_EMPLOY_PENDING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case READ_EMPLOY_FULFILLED: {
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null,
      };
    }
    case READ_EMPLOY_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    }

    // Employ crate
    case CREATE_EMPLOY_PENDING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case CREATE_EMPLOY_FULFILLED: {
      return {
        ...state,
        data: state.data.concat(action.data),
        loading: false,
        error: null,
      };
    }
    case CREATE_EMPLOY_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    }

    // Employ delete
    case DELETE_EMPLOY_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_EMPLOY_FULFILLED: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }

    case DELETE_EMPLOY_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    // Employ update

    case UPDATE_EMPLOY_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_EMPLOY_FULFILLED: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }
    case UPDATE_EMPLOY_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    // Product read
    case READ_PRODUCT_PENDING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case READ_PRODUCT_FULFILLED: {
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null,
      };
    }
    case READ_PRODUCT_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    }

    // Poduct crate
    case CREATE_PRODUCT_PENDING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case CREATE_PRODUCT_FULFILLED: {
      return {
        ...state,
        data: state.data.concat(action.data),
        loading: false,
        error: null,
      };
    }
    case CREATE_PRODUCT_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    }

    // Product update

    case UPDATE_PRODUCT_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_PRODUCT_FULFILLED: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }
    case UPDATE_PRODUCT_REJECTED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default adminReducer;
