import { use, useState } from 'react';

export default function ToDoApp(){
    var [text,setText] = useState([]);
    var [toDo,setToDo] = useState([]);

    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(e){
        setToDo([...toDo, text])
    }

    function handleClickRemove(e){
        setToDo(toDo.filter((text,i) => i !== e))
    }

    return (
        <>
        <br />
          <input onChange={handleChange} placeholder='Input Text'></input>
          <br />
          <button onClick={handleClick}>Click</button>
          <br />
          <ul>
            {toDo.map((item,index) => (<li key={index}> {item} <button id='value' value='index' onClick={()=>handleClickRemove(index)}>Delete</button></li>))}
          </ul>
        </>
      )
}