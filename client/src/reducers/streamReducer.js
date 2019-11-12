import {CREATE_STREAMS} from "../actions/types";
export default (state={},action)=>{
  switch(action.type){
    
    case CREATE_STREAMS:
            console.log(action.payload.id,"WITH_ID");
            console.log(action.payload,"WITH_PAYLOAD")
         return{...state,[action.payload.id]:action.payload}
      default :
          return state;   
      
  }
}