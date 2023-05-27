import React,{ useState }from 'react';
import CalculateWeeks from './CalculateWeeks.js'
import './App.css';

let dob =''
function App() {
  const [currentValue, setCurrentValue] = useState('')
  // const [date, setDate] = useState('')
  
  
  function storeDate(event){
    event.preventDefault()
    dob = currentValue
    console.log(CalculateWeeks(dob))
    setCurrentValue('') //making the textbox empty
  }
  return (
    <main>
      <h1>Life Calendar</h1>
      <form action="" method='GET' onSubmit={storeDate}>
        <input type="date" value={currentValue} onChange={(event)=>{
          setCurrentValue(event.target.value)
        }}/>
        <button type="submit">Submit</button>
        <p>{dob}</p>
      </form>
    </main>
  );
}

export default App;
