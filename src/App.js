import React,{ useState }from 'react';
import './App.css';

let dob =''
function App() {
  const [currentValue, setCurrentValue] = useState('')
  // const [date, setDate] = useState('')
  
  
  function storeDate(event){
    event.preventDefault()
    dob = currentValue
    setCurrentValue('')
  }
  return (
    <main>
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
