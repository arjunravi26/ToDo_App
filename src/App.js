import React, { useState } from 'react';
import './App.css';
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { setToDos([...toDos, { id: Date.now(), text: toDo, staus: false }]) }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((valu) => {
          return (<div className="todo">
            <div className="left">
              <input onChange={(e) => {
                setToDos(toDos.filter(obj => {
                  if (obj.id === valu.id) {
                    obj.staus = e.target.checked
                  }
                  return obj
                }))
              }} type="checkbox" name="" id="" value={valu.staus} />
              <p key={valu.id}>{valu.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"
              onClick={()=>{console.log(valu)
              setToDos(toDos.filter(obj=>{
                if(obj.id===valu.id){
                  obj=null
                }
                return obj;
             }
              ))
                  
                  }
}
              ></i>
            </div>
          </div>)
        })

        }
        {toDos.map((valu) => {
          if (valu.staus) {
            return (<h1>{valu.text}</h1>)
          }
          return null
        })}
      </div>

    </div>
  );
}

export default App;