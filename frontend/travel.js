let displayUl = document.getElementById('displayUl')
let displayUl2 = document.getElementById('displayUl2')
let btn= document.getElementById('display')
let date= document.getElementById('date')
window.addEventListener('DOMContentLoaded',()=>{
    displayWeeklyRides(10)
   displayDailyRides(10,'2023-03-27')
})
// btn.addEventListener('click',()=>{
//    console.log(date.value)
//    console.log(typeof date.value)
//    if(date.value.length==0){
//     console.log("invalid date")
//     alert("please enter date")
//    }else{
//     displayDailyRides(1,date.value)
//    }
// })

async function displayDailyRides(id,date){
    let result=await axios.get(`http://localhost:3000/dailybookings/${id}/${date}`)
    //console.log(result.data)
result.data.forEach(e=>createLi(e,displayUl))

}

async function displayWeeklyRides(id){
    let result=await axios.get(`http://localhost:3000/weeklybookings/${id}`)
    console.log(result.data)
    //day: 'Monday', from: 'zone2', to: 'zone1', fare: 35, DateOfBooking: '2023-03-27'}

result.data.forEach(e=>createLi2(e,displayUl2))

}


function createLi2(e,ul){
    let li= document.createElement('li')
    li.className='list'
    let dayspan= document.createElement('span')
    dayspan.innerText=e.day
    li.appendChild(dayspan)
    let timespan= document.createElement('span')
    timespan.innerText=e.DateOfBooking
    li.appendChild(timespan)
    let fromspan= document.createElement('span')
fromspan.innerText=e.from
li.appendChild(fromspan)
let tospan= document.createElement('span')
tospan.innerText=e.to
li.appendChild(tospan)
let farespan= document.createElement('span')
farespan.innerText=e.fare
li.appendChild(farespan)
ul.appendChild(li)
}



function createLi(e,ul){
    let li= document.createElement('li')
    li.className='list'
    let dayspan= document.createElement('span')
    dayspan.innerText=e.day
    li.appendChild(dayspan)
    let timespan= document.createElement('span')
    timespan.innerText=e.time
    li.appendChild(timespan)
    let fromspan= document.createElement('span')
fromspan.innerText=e.from
li.appendChild(fromspan)
let tospan= document.createElement('span')
tospan.innerText=e.to
li.appendChild(tospan)
let farespan= document.createElement('span')
farespan.innerText=e.fare
li.appendChild(farespan)
ul.appendChild(li)
}
