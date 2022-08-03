fetch ('https://date.nager.at/api/v3/publicholidays/2022/US')
.then ((resp) => resp.json())
.then ((holidays) => renderHolidays(holidays))

function renderHolidays(holidays) {
    console.log(holidays)
}
