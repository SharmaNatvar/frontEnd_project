import { CREATE_EMPLOY_FULFILLED, CREATE_EMPLOY_PENDING, CREATE_EMPLOY_REJECTED, DELETE_EMPLOY_FULFILLED, DELETE_EMPLOY_PENDING, DELETE_EMPLOY_REJECTED, READ_EMPLOY_FULFILLED, READ_EMPLOY_PENDING, READ_EMPLOY_REJECTED, UPDATE_EMPLOY_FULFILLED, UPDATE_EMPLOY_PENDING, UPDATE_EMPLOY_REJECTED } from "../action/action";

const initialState = {
    data : [],
    loading : false,
    error:null
};



const adminReducer = (state =initialState , action ) =>{
    switch(action.type){
        // read
        case READ_EMPLOY_PENDING:{
          return{
            ...state,
            loading : true,
            error:null
          }
        }
        case READ_EMPLOY_FULFILLED:{
          return{
            ...state,
            data: action.data,
            loading : false,
            error:null
          }
        }
        case READ_EMPLOY_REJECTED:{
          return{
            ...state,
            loading : false,
            error : action.data
          }
        }

        // crate
        case CREATE_EMPLOY_PENDING:{
          return{
            ...state,
            loading : true,
            error:null
          }
        }
        case CREATE_EMPLOY_FULFILLED:{
          return{
            ...state,
            data: state.data.concat(action.data),
            loading : false,
            error:null
          }
        }
        case CREATE_EMPLOY_REJECTED:{
          return{
            ...state,
            loading : false,
            error:action.data
          }
        }

        // delete
        case DELETE_EMPLOY_PENDING: {
            return {
              ...state,
              loading: true,
            }
          }
      
          case DELETE_EMPLOY_FULFILLED:{
            return{
              ...state,
              loading :false ,
              error:null,
            }
          }
      
          case DELETE_EMPLOY_REJECTED:{
            return{
              ...state,
              loading: false,
              error: action.payload,
            }
          }

          // update 

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

        default:{
            return{
                ...state
            }
        }
    }

}


export default adminReducer