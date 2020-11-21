import React, { Component} from 'react'

class UserGreeting extends Component 
{
    constructor(props){
        super(props)
        this.state ={
            isLoggedIn : false
        }
    }
    render()
    {
        return this.state.isLoggedIn && <div> Welcome Gowthami </div>   //short circuit operator
      //  return(
     //   this.state.isLoggedIn ? <div> Welcome Gowthami </div> : <div> Welcome Guest  </div>    //ternary operator
     //   )
      //  let message               //element variables
     //   if(this.state.isLoggedIn){
      //  message =  <div> Welcome Gowthami </div>
      //  }else{
      //  message =  <div> Welcome Guest  </div>   
       // }
   // return <div>{message}</div>
       /* if(this.state.isLoggedIn)
        {
            return(
                <div> Welcome Gowthami </div> )     //if else
        }else{
            return(
                <div> Welcome Guest  </div> )
        }*/
        //return(
           // <div>
            //<div>Welcome Gowthami</div>
           // <div>Welcome Guest</div>
            //</div>
       // )
    }
}
export default UserGreeting