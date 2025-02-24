import { useState } from 'react';

export default function Baitap1(){
    var [a,setA] = useState(0);
    var [b,setB] = useState(0);
    var [result,setResult] = useState(0);
    var [operation,setOperation] = useState('+')

    function handleChangeA(e){
        setA(parseInt(e.target.value));
    }

    function handleChangeB(e){
        setB(parseInt(e.target.value));
    }

    function handleClick(e){
        let res = 0;
        if (operation === '+') {
        res = a + b;
        } else if (operation === '-') {
        res = a - b;
        } else if (operation === '*') {
        res = a * b;
        } else if (operation === '/') {
        res = b !== 0 ? a / b : 'Không thể chia cho 0';  
        }
        setResult(res);
    }

    return (
        <>
          <input onChange={handleChangeA} placeholder='Input A'></input>
          <br />
          <input onChange={handleChangeB} placeholder='Input B'></input>
          <br />
          <input type="radio" value="+" checked={operation === '+'} onChange={() => setOperation('+')}></input>+
          <input type="radio" value="-" checked={operation === '-'} onChange={() => setOperation('-')}></input>-
          <input type="radio" value="*" checked={operation === '*'} onChange={() => setOperation('*')}></input>*
          <input type="radio" value="/" checked={operation === '/'} onChange={() => setOperation('/')}></input>/
          <br />
          <button onClick={handleClick}>Click</button>
          <br />
          <h2>Kết quả: {result}</h2>
        </>
    )
}