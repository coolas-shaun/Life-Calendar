import React from "react";
import './Calendar.css'


function Calendar(props){
    const {numberOfWeeks,totalWeeks} = props
    console.log(numberOfWeeks, totalWeeks[0].type);
    return <div className="calendar-container">
        {totalWeeks}
    </div>
}


export default Calendar