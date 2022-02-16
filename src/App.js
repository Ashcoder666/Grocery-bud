import React,{useState} from 'react'
import List from './List'
import Alert from './Alert'
import './app.css'

const App = () => {
    const [name,setName] = useState('')
    const [list,setList] = useState([])
    const [isEditing,setIsEditing] = useState(false)
    const [alert,setAlert] = useState({show:false,msg:'',type:''})
  return (
    <div className='body-main' >
      <h1 className='title' >Grocery Bud</h1>
      <Alert />
      <div  >
          <input type='text' placeholder='eg: milk,egg ..' />
          <button>ADD Item</button>
      </div>
      <List />
      <button className='clr-btn' >Clear List</button>
    </div>
  )
}

export default App
