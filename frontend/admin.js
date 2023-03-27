//
let form = document.getElementById('zoneForm')
let boardingZone= document.getElementById('zoneA')
let destinationZone= document.getElementById('zoneB')
let peakCharge= document.getElementById('peakCharge')
let normalCharge= document.getElementById('normalCharge')
let ul= document.getElementById('fareul')
ul.addEventListener('click',editDelete)
form.addEventListener('submit',ZoneCharges)
let peakUl = document.getElementById('peakul');
peakUl.addEventListener('click',editDelete)
let capul = document.getElementById('capul');
capul.addEventListener('click',editDelete)
//
let capForm= document.getElementById('capForm')
capForm.addEventListener('submit',submitCap)
let capzoneA= document.getElementById('capzoneA')
let capzoneB= document.getElementById('capzoneB')
let dailycapCharge=document.getElementById('dailycapCharge')
let weeklyCapCharge= document.getElementById('weeklyCapCharge')
//
let timingForm = document.getElementById('timingForm')
timingForm.addEventListener('submit',submitPeaktimings)
let dayA= document.getElementById('dayA')
let dayB= document.getElementById('dayB')
let timeA=document.getElementById('timeA')
let timeB=document.getElementById('timeB')
window.addEventListener('DOMContentLoaded',async()=>{
  await displayCaps()
  await displayZoneFares()
  await displaypeaktimings()
})
let http= 'http://localhost:3000/admin'
let paramId=0


function clearUl(ul){
  while (ul.firstChild)
  ul.removeChild(ul.firstChild);

}



async function submitCap(e){
  e.preventDefault()
  console.log("clicked capping")

  let obj={
  "capZoneA": capzoneA.value,
  "capZoneB":capzoneB.value,
  "dailyCap":dailycapCharge.value,
  "weeklyCap":weeklyCapCharge.value
  }
  await axios.post(http+'/capdetails',obj)
  console.log(obj)
  createLi(capzoneA.value,capzoneB.value,"daily cap","weekly cap" ,dailycapCharge.value,weeklyCapCharge.value,capul,"edit3")
  capzoneA.value=''
  capzoneB.value=''
  dailycapCharge.value=''
  weeklyCapCharge.value=''

}

async function submitPeaktimings(e){
console.log("clicked timing")
e.preventDefault();
let obj={
"dayA": dayA.value,
"dayB":dayB.value,
"timeA":timeA.value,
"timeB":timeB.value
}
console.log(obj)
let result= await axios.post(http+'/peakTimings',obj)
console.log(result)
//new Date(`${loginDatevalue}T00:00`)
// createLi(dayA.value,dayB.value,"peak hour start","peak hour end" ,timeA.value,timeB.value,peakUl,"edit2")
dayA.value=''
dayB.value=''
timeA.value=''
timeB.value=''
await displaypeaktimings()
}

async function ZoneCharges(e){
    console.log("clicked")
e.preventDefault();
let obj={
    "boardingZone":boardingZone.value,
    "destinationZone":destinationZone.value,
    "peakCharge":peakCharge.value,
    "normalCharge":normalCharge.value
}
console.log(obj)
createLi(boardingZone.value,destinationZone.value,"normal fare","peak hour fare" ,normalCharge.value,peakCharge.value,ul,"edit")
let result =await axios.post(http+'/zoneCharge',obj)
console.log(result)
boardingZone.value=''
destinationZone.value=''
peakCharge.value=''
normalCharge.value=''
}


function createLi(input1,input2,text1,text2,value1,value2,ul,editClass,id){ 
let li = document.createElement('li')
li.id=id
li.className='list'
let zone1span=document.createElement('span')
zone1span.innerText=input1
zone1span.className='liItem'
li.appendChild(zone1span)

let tospan=document.createElement('span')
tospan.innerText='to'
tospan.className='liItem'
li.appendChild(tospan)

let zone2span=document.createElement('span')
zone2span.innerText=input2
zone2span.className='liItem'
li.appendChild(zone2span)

let normalText=document.createElement('span')
normalText.className='liItem'
normalText.innerText=text1
li.appendChild(normalText)

let charge1span=document.createElement('span')
charge1span.innerText=value1
charge1span.className='liItem'
li.appendChild(charge1span)

let peakText=document.createElement('span')
peakText.className='liItem'
peakText.innerText=text2
li.appendChild(peakText)

let charge2span=document.createElement('span')
charge2span.innerText=value2;
charge2span.className='liItem'
li.appendChild(charge2span)

let editBtn= document.createElement('button')
editBtn.innerText="EDIT"
editBtn.className=editClass
li.appendChild(editBtn)

let delBtn= document.createElement('button')
delBtn.innerText="DEL"
delBtn.className="delete"
li.appendChild(delBtn)

ul.appendChild(li)
}

async function editDelete(e){
    if(e.target.className=='delete'){
        let li= e.target.parentNode
          let ul= li.parentNode
          console.log(ul.id)
       
if(ul.id=='fareul'){
  let result= await axios.delete(http+`/zoneCharge/${li.id}`)
  console.log(result)
  await displayZoneFares()

}
else if(ul.id=='capul'){
  console.log(li.id)
 let result= await axios.delete(http+`/capdetails/${li.id}`)
  console.log(result)
  await displayCaps()
}
else if(ul.id=='peakul'){
  let result= await axios.delete(http+`/peakTimings/${li.id}`)
  console.log(result)
  await displaypeaktimings()
}
        //ul.removeChild(li)
        
    }
    else if(e.target.className=='edit'){
            let li= e.target.parentNode
            paramId=li.id
            boardingZone.value=li.childNodes[0].innerText
            destinationZone.value=li.childNodes[2].innerText
            peakCharge.value=li.childNodes[6].innerText
            normalCharge.value=li.childNodes[4].innerText
    }  
      else if
        (e.target.className=='edit2'){
            console.log("edit 2 clicked")
            let li= e.target.parentNode
            paramId=li.id
          dayA.value=li.childNodes[0].innerText
            dayB.value=li.childNodes[2].innerText
            timeA.value=li.childNodes[6].innerText
            timeB.value=li.childNodes[4].innerText
    }

    else if
    (e.target.className=='edit3'){
        console.log("edit 3 clicked")
        let li= e.target.parentNode
        paramId=li.id
      capzoneA.value=li.childNodes[0].innerText
        capzoneB.value=li.childNodes[2].innerText
        dailycapCharge.value=li.childNodes[6].innerText
        weeklyCapCharge.value=li.childNodes[4].innerText
}

}


async function displayCaps(){
 let result=await axios.get(http+'/capdetails')
 console.log(result)
 clearUl(capul)
result.data.forEach(e => {
  createLi(e.destinationZone,e.originZone,"daily cap","weekly cap" ,e.dailyCap,e.weeklyCap,capul,"edit3",e.id)
});


}

async function displayZoneFares(){
  let result=await axios.get(http+'/zoneCharge')
  console.log(result)
 
  //{id: 1, originZone: 'zone1', destinationZone: 'zone1', normalFare: 25, PeakHourFare: 30}
clearUl(fareul)
 result.data.forEach(e => {
  createLi(e.originZone,e.destinationZone,"normal fare","peak hour fare" ,e.normalFare,e.PeakHourFare,fareul,"edit",e.id)
 });

}
async function displaypeaktimings(){
  console.log("clearing peak ul ")
  clearUl(peakUl )
  console.log("displaying peak ul")
  let result=await axios.get(http+'/peakTimings')
  console.log(result)
  const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  //{id: 1, startDay: 'Monday', endDay: 'friday', startTime: '07:00:00', endTime: '10:30:00'}
    result.data.forEach(e => {
  startDay=weekday[+e.startDay -1] 
endDay=weekday[+e.endDay -1]
   createLi(startDay,endDay,"peak hour start","peak hour end" ,e.startTime,e.endTime,peakUl,"edit2",e.id)
  });
  
}
