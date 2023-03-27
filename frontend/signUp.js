let userForm= document.getElementById('userForm')
let name= document.getElementById('name')
let email= document.getElementById('email')
let package = document.getElementById('cardPackage')
userForm.addEventListener('submit',submitDetails)

async function submitDetails(e){
    e.preventDefault()
    if(package.value==0){
        alert("select a package")
    }else{
     let obj= {
            name:name.value,email:email.value,package:package.value
        }
        console.log(obj)
        let result =await axios.post('http://localhost:3000/signup',obj)
        console.log(result.data)
    let userDetails={
        name:name.value,
        cardId:result.data
    }
    alert("remember your card details: "+ result.data)
        email.value='',
        package.value=''
        name.value=''
        
        let a= document.createElement('a')
        a.href='./login.html'
       a.click()
    }
}

//check if the user is valid and then redirect to booking page