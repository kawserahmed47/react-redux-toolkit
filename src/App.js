
import {useSelector, useDispatch} from 'react-redux';

import {actions} from './store/toolkit';

function App() {

  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const increment = () =>{
    // dispatch({type:'INC'});//Without Toolkit
    dispatch(actions.increment());//With Toolkit
  }

  const decrement = () =>{
    // dispatch({type:'DEC'});//Without Toolkit
    dispatch(actions.decrement());//With Toolkit
  }

  return (
    <div>
      <h1>Counter App</h1>

      <div className="counterApp">

        <div className="decrement">
          <button className="decrementBtn" onClick={decrement} type="button">Decrement (-) </button>
        </div>

        <div className="displayCounter">
          <h2 className="display">{counter}</h2>
        </div>

        <div className="increment">
          <button className="incrementBtn"  onClick={increment} type="button">Increment (+)</button>
        </div>

      </div>
       
    </div>
  );
}

export default App;
