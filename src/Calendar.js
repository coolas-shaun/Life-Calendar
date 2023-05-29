import React from "react";


function Calendar(props){
    const {numberOfWeeks,totalWeeks} = props
    console.log(numberOfWeeks, totalWeeks[0].type);
    return <div className="calendar-container">
        <ul>{totalWeeks}</ul>
    </div>
}


export default Calendar