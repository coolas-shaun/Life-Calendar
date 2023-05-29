import React,{ useState }from 'react';
import CalculateWeeks from './CalculateWeeks.js'
import Calendar from './Calendar.js';
import './App.css';

let dob =''
let totalWeeks = []
let usedWeeks = 0
function App() {
  const [currentValue, setCurrentValue] = useState('')
  const [maxAge, setAge] = useState(90)
  const [fillData, setFillData] = useState(false)
  // const [date, setDate] = useState('')
  
  function CalculateTotalWeeks(weeks,maxAge=90){
    let totalWeeks = maxAge*52 //Math.floor((maxAge*365.25)/7)
    let weekList = []
    for (let i = 0; i < totalWeeks; i++) {
      weekList.push(<li id={i} className={i<weeks?"weeks used-week":"weeks"}>{"[]"}</li>)
    }
    return weekList 
  }
  function storeDate(event){
    event.preventDefault()
    dob = currentValue
    usedWeeks = CalculateWeeks(dob)
    console.log(usedWeeks)
    totalWeeks = CalculateTotalWeeks(usedWeeks,maxAge)
    setCurrentValue('') //making the textbox empty
    setFillData(true)
    // setAge('')
  }
  return (
    <main>
      <h1>Life Calendar</h1>
      <form action="" method='GET' onSubmit={storeDate}>
        <input type="date" value={currentValue} onChange={(event)=>{
          setCurrentValue(event.target.value)
        }}/>
        <input type="number" value={maxAge} onChange={(event)=>{
          setAge(event.target.value)
        }}/>
        <button type="submit">Submit</button>
        <p>{dob}</p>
      </form>
      {fillData?<Calendar 
        numberOfWeeks = {usedWeeks}
        totalWeeks = {totalWeeks}
      />:null}
    </main>
  );
}

export default App;
