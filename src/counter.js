import React,{ useState } from 'react';

export default function Counter(){
  const [count,setCounter] = useState(0);

  return(
    <div>
      <p>Clicked {count}</p>
      <button onClick={() => setCounter(count + 1)}>Click counter</button>
    </div>
  )


}