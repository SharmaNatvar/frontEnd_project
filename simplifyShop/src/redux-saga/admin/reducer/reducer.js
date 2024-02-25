import { CREATE_EMPLOY_FULFILLED, CREATE_EMPLOY_PENDING, CREATE_EMPLOY_REJECTED, READ_EMPLOY_FULFILLED, READ_EMPLOY_PENDING, READ_EMPLOY_REJECTED } from "../action/action";

const initialState = {
    data : [],
    loading : false,
    error:null
};



const adminReducer = (state =initialState , action ) =>{
console.log(action , 'action readucer');
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

        default:{
            return{
                ...state
            }
        }
    }

}


export default adminReducer