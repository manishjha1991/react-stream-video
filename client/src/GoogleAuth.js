import React, { Component } from 'react'
import {connect} from "react-redux"
import {signIn,signOut} from "./actions"
 class GoogleAuth extends Component {
    //state={isSignedIn:null}
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'58119671595-ie41lt7efup3r7cmkaerlvirhfkeu36t.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                //this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        })
    }
    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut()
        }
        // this.setState({isSignedIn:this.auth.isSignedIn.get()});
    };
    onSingInClick=()=>{
        this.auth.signIn();
    }
    onSingOutClick=()=>{
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null
        }else if(this.props.isSignedIn){
            return(
                <button onClick={this.onSingOutClick} className="ui red google button">
                <i className="google icon"/>
                Sing Out
                </button>
            )
        }else{
           return (
            <button onClick = {this.onSingInClick} className="ui red google button">
            <i className="google icon"/>
            Sing In With Google
            </button>
           )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)