import { useState } from 'react';

const UseStateCounter = () => {
       const CounterHandler = () => {
    setCounter(count => count + 1);
  }

  const [counter, setCounter] = useState(10);
     return (
          <>
               <h2 className='text-blue-400 text-4xl'>using useState hook</h2>
               <h3>1. Increasing Counter</h3>
               <h3>{counter}</h3>
               <button className='border border-stone-500 p-2 m-2' id='counterBtn' onClick={CounterHandler}>Increase Counter</button>
          </>
  )
};

export default UseStateCounter;
