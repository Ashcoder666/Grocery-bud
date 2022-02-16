import React from 'react'

const List = ({items,deleted,edit}) => {
  return (
    <div>
      {items.map(item=>{
        const {id,title} = item;
        return(
          <div key={id}>
            <h2>{title}</h2>
            <button onClick={()=>{edit(id)}}>edit</button>
            <button onClick={()=>{deleted(id)}} >Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default List
