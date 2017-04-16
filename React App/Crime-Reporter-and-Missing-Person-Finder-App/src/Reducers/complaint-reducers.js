// import {handleActions} from 'redux-actions';
import actionTypes from './actionTypes';

const ComplaintReducers = (state = {
    complaints:{}

} , action) => {
    switch(action.type){
        
      case actionTypes.ForComplaints:{
          return state={
              ...state,
              complaints: action.payload
          };
      }
      default:{}
    }
    return state;
}
export default ComplaintReducers;
