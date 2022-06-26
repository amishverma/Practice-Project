import React from 'react'
import SingleUser from './SingleUser'

const ShowUser = ({items}) => {

    
    if(items.length <= 0){
        return;
    }

  return (
    <div style={{backgroundColor:"white",width:"30rem",padding:"2rem",margin:"15px auto"}}>
    {items.map((item,index)=>{
     return  <SingleUser key={index} name={item.name} age={item.age}></SingleUser>
    })}
    </div>
  )
}

export default ShowUser