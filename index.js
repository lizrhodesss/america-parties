fetch ('https://date.nager.at/api/v3/publicholidays/2022/US')
.then ((resp) => resp.json())
.then ((holidays) => {
    renderHolidays(holidays)
    displayHoliday(holidays)
    displayHoliday(holidays[0])
 })

function renderHolidays(holidays) {
    holidays.forEach (holiday => {
        const holidayName = document.querySelector('#holidays-list')
        const holidayContainer = document.createElement("p")
        holidayContainer.innerText = holiday.name
        holidayName.append(holidayContainer)
        holidayContainer.addEventListener('click', () => displayHoliday(holiday))}
    )
}
function displayHoliday(holidays) {
    const displayName = document.querySelector('#holiday-name')
    displayName.textContent = holidays.name
    const displayDate = document.querySelector('#holiday-launch-year')
    displayDate.textContent = holidays.displayDate
    const displayFixed = document.querySelector('#holiday-fixed')
    displayFixed.textContent = holidays.fixed
    const displayGlobal = document.querySelector('#global')
    displayGlobal.textContent = holidays.global
}

let form = document.querySelector('#holiday-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const commentList = document.querySelector('#comments-list')
        const commentHere = document.createElement("li")
        newComment = document.querySelector("#holiday-comment").value
        commentHere.innerText=newComment
        console.log(commentHere)
        commentList.append(commentHere)
        form.reset()
        
}
)