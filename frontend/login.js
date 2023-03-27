//here it is supposed that card details contains email and card number 
//in which both are unique identifiers,

let swipeform= document.getElementById("swipeForm")
let email= document.getElementById('email')
let cardNumber = document.getElementById('cardNumber')
let loginDate= document.getElementById('loginDate')
swipeform.addEventListener('submit',submtDetails)


async function submtDetails(e){
    console.log("button clicked")
e.preventDefault()
let emailVal= email.value;
let cardNumberValue= cardNumber.value
let loginDatevalue=loginDate.value
let obj={
    cardId:cardNumberValue,
    emailVal,
    loginDatevalue
}

// let date= new Date(`${loginDatevalue}T00:00`)
// console.log("date: ", date.getDate(),date.getMonth(),date.getFullYear())
console.log(obj)
let result=await axios.post('http://localhost:3000/login',obj)
console.log(result.data)

if(result.data.success){
alert(result.data.message)
let userDetails={
    cardId:cardNumber.value
}
    loginDate.value=''
    email.value=''
    cardNumber.value=''
 localStorage.setItem('userDetails',JSON.stringify(userDetails))
    let a= document.createElement('a')
    a.href='./booking.html'
   a.click()

}else{
alert(result.data.message)

}



}




//check if the user is valid and then redirect to booking page




