import { useState } from 'react';

export default function(){
    var [text,setText] = useState(0);
    var [name,setName] = useState(0);

    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(e){
        setName(text)
    }
    return (
        <>
          <input onChange={handleChange} placeholder='Input Text'></input>
          <br />
          <button onClick={handleClick}>Click</button>
          <br />
          <span>{name}</span>
        </>
      )
}