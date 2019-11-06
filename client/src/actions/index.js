import {SING_IN,SING_OUT} from "./types"
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