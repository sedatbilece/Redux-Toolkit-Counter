import './App.css';
import {useSelector ,useDispatch} from 'react-redux';
import { increment,decrement,incrementMore,decrementMore,reset} from './counterSlice';
import {useEffect} from 'react';

function App() {


  const counter = useSelector(state => state.counter.value);

  const dispatch = useDispatch();
   
  useEffect(() => {
    console.log("Sayaç değişti :"+counter);
  }, [counter]);
 
  return (
    <div className="App">
      <div className='center'>
      <h1 className='item header' >Count : {counter}</h1>
       <div>
       <button  className='item btn' onClick={()=>dispatch(incrementMore())}>+5</button>
       <button  className='item btn' onClick={()=>dispatch(increment())}>+1</button>
       <button  className='item btn' onClick={()=>dispatch(reset())}>Reset</button>
      <button  className='item btn' onClick={()=>dispatch(decrement())}>-1</button>
      <button  className='item btn' onClick={()=>dispatch(decrementMore())}>-5</button>
       </div>
      </div>
    </div>
  );
}

export default App;
