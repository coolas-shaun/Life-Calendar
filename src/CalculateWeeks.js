function CalculateWeeks(dateOfBirth){
    let d1 = new Date(dateOfBirth)
    let dob = [d1.getDate(),d1.getMonth()+1,d1.getFullYear()]
    let d2 = new Date()
    let currentDate = [d2.getDate(),d2.getMonth()+1,d2.getFullYear()]
    console.log(dob, currentDate)
    let numberOfYears = currentDate[1]===dob[1]?currentDate[1]-dob[1]:(currentDate[1]-1)-dob[1]
    console.log(numberOfYears)

}

export default  CalculateWeeks

// start date: 12-07-2002
// end date: 10-06-2022

//no of days: 7273 days
// no of weeks : 1039 weeks