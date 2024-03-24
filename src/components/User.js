import React, { useState } from 'react'

const User = (props) => {
    const[count]=useState(1);
    const[count2]=useState(2);
    const{name,location}=props;
  return (
    <div class="user">
         <h1>Count:{count}</h1>
        <h2>Count2:{count2}</h2>
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>

    </div>
  )
}

export default User;