fetch ('https://date.nager.at/api/v3/publicholidays/2022/US')
.then ((resp) => resp.json())
.then ((holidays) => {
    renderHolidays(holidays)
    displayHoliday(holidays)
    displayHoliday(holidays[0])
 })

function renderHolidays(holidays) {
    holidays.splice(3, 2)
    holidays.splice(9, 1)
    holidays.forEach (holiday => {
        const holidayName = document.querySelector('#holidays-list')
        const holidayContainer = document.createElement("p")
        holidayContainer.innerText = holiday.name
        holidayName.append(holidayContainer)
        holidayContainer.addEventListener('click', () => displayHoliday(holiday))
        holidayContainer.addEventListener('mouseover', () => window.alert ("Happy " + holiday.name))
      }
    )
}
// document.querySelector('#holidays-list').addEventListener('mouseover', window.alert ("Happy " + holiday.name))
function displayHoliday(holidays) {
    const displayName = document.querySelector('#holiday-name')
    displayName.textContent = holidays.name
    const displayDate = document.querySelector('#holiday-launch-year')
    displayDate.textContent = holidays.displayDate
    const displayFixed = document.querySelector('#holiday-fixed')
    displayFixed.textContent ="Is this holiday on a fixed date? " + holidays.fixed
    const displayGlobal = document.querySelector('#global')
    displayGlobal.textContent = "Is this a global holiday? " + holidays.global
    
}

let form = document.querySelector('#holiday-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const commentList = document.querySelector('#comments-list')
        const commentHere = document.createElement("li")
        newComment = document.querySelector("#holiday-comment").value
        commentHere.innerText=newComment
        commentList.append(commentHere)
        form.reset()
    }


    )