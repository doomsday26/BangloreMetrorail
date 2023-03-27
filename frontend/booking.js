let bookingForm= document.getElementById('bookingForm')
let time = document.getElementById('time')
let Ozone = document.getElementById('Ozone')
let Dzone= document.getElementById('Dzone')
let date= document.getElementById('date')
//card details let cardType=  get from local storage the card type
//2e91f02b-d80d-4d9b-91a7-7c7d94db1b74
window.addEventListener('DOMContentLoaded',()=>{
    let userData= localStorage.getItem('userDetails')
    userData=JSON.parse(userData)
    console.log("data")
    console.log(userData)
})
bookingForm.addEventListener('submit',makeBooking)

async function makeBooking(e){
    e.preventDefault()
    if(Ozone.value==0||Dzone.value==0){alert("select the boarding and destination zones")}
    else{ 
        let timevalue= time.value;
        let onboard= Ozone.value;
        let destination= Dzone.value
        let userData= localStorage.getItem('userDetails')
        userData=JSON.parse(userData)
        console.log(userData)
        let obj={Time:timevalue,onboard,destination,cardId:userData.cardId,date:date.value}
        console.log(obj)
       let result= await axios.post('http://localhost:3000/booking/bookNew',obj)
       console.log(result)
        time.value='--:--'
        date.value=''
        Ozone.selectedIndex=0;
        Dzone.selectedIndex=0
        //axios.post
    }

}

