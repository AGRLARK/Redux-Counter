import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber,decNumber } from './actions/index';

function App() {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Increment/Decrement couner</h1>
      <h3>using React+Vite & Redux </h3>


      <div className="container">
        <div className="counter-container">
          <div className='decrement'>
            <a className="btn btn-primary" title='Decrement' onClick={()=>dispatch(decNumber())}><span>-</span></a>
          </div>
          <div className="view">
            <input name="quantity" type="text" className='quantity_input' value={myState}/>
          </div>
          <div className='increment'>
            <a className="btn btn-primary" title='Increment' onClick={()=> dispatch(incNumber())}><span>+</span></a>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
