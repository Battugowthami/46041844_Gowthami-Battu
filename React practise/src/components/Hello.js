import React, { Component } from 'react';

const Hello = () =>{
/*return (
   <div className : 'dummyClass'>
       <h1>Hiii Gowthami</h1>   //JSX
   </div>
)
}*/

return React.createElement(
    'div', 
    {id : 'hello' , className : 'dummyClass'},
     React.createElement('h1' , null, 'Hai Gowthami')     // without JSX
)
}
 export default Hello