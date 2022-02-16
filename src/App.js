import React,{useState} from 'react'
import List from './List'
import Alert from './Alert'
import './app.css'

const App = () => {
    const [name,setName] = useState('')
    const [list,setList] = useState([])
    const [isEditing,setIsEditing] = useState(false)
    const [alert,setAlert] = useState({show:false,msg:'',type:''})
    const [editId,setEditID] = useState(null)
    const submitHandler=()=>{
     if(!name){
       setAlert({
         show:true,
         msg:"plz enter something",
        type:"danger"
       })
     }else if(name && isEditing){
      setList(list.map(item=>{
        if(item.id===editId){
          return{ ...item,title:name}
        }
        return item
      }))
     }else{
       setAlert({show:true,msg:"new item created",type:"success"})
       const newitem = {id:new Date().getTime().toString(),title:name}
       setList([...list,newitem])
       setName('')
     
    }}

    const deletehandler = (id)=>{
      setAlert({show:true,msg:" item deleted",type:"danger"})
      const newarr = list.filter(item=>item.id !== id)
      setList(newarr)
    }

    const editHandler =(id) =>{
      const specificItem = list.find(item=>item.id === id)
     setIsEditing(true)
     setEditID(id)
     setName(specificItem.title)
   
     
      
    }
  return (
    <div className='body-main' >
      <h1 className='title' >Grocery Bud</h1>
     {alert.show &&  <Alert {...alert} />}
      <div  >
          <input type='text' placeholder='eg: milk,egg ..' onChange={(e)=>{setName(e.target.value)}}/>
          <button onClick={submitHandler} > {isEditing?"Edit":"Add Item"} </button>
      </div>
      <List items={list} deleted={deletehandler} edit={editHandler}/>

      {list.length>0 && <button className='clr-btn' onClick={()=>{setList([])}} >Clear List</button>}
    </div>
  )
}

export default App
