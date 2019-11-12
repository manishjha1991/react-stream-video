import streams  from "../apis/streams"
import {SING_IN,SING_OUT,CREATE_STREAMS} from "./types";

export const signIn=(userId)=>{
    return{
        type:SING_IN,
        payload:userId
    };
};
export const signOut=()=>{
    return{
        type:SING_OUT
    };
}
export const createStream =formValues=> async (dispatch,getState)=>{
    // const x = getState();
    // console.log(x,"X")
    try{
        const response = await streams.post("/streams",formValues);
        dispatch({type:CREATE_STREAMS,payload:response.data})
    }catch(err){
        console.log(err)
    }
  
}