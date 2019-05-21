let usersData ;

function validateUsername() {
    let regex = /^[A-Z][a-zA-Z]{2,8}$/;
    if(regex.test(userNameInp.value) == true) {
        document.getElementById('usernamealert').style.display = 'none';
    } else {
        document.getElementById('usernamealert').style.display = 'block';
    }
}

function validateUserphone () {
    let regex = /^(002)?010[0-9]{8}$/;
    if(regex.test(userPhoneInp.value) == true) {
        document.getElementById('userphonealert').style.display = 'none';
    } else {
        document.getElementById('userphonealert').style.display = 'block';
    }
}

function validateUsermail () {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(regex.test(userMailInp.value) == true) {
        document.getElementById('aleartusermail').style.display = 'none'
    } else {
        document.getElementById('aleartusermail').style.display = 'block'
    }
}

if(localStorage.getItem("myData") == null) {
    usersData = [];
    } else {
        usersData = JSON.parse(localStorage.getItem("myData"));
    }

let userNameInp = document.getElementById("userName");
let userAgeInp = document.getElementById("userAge");
let userMailInp = document.getElementById("userMail");
let userPhoneInp = document.getElementById("userPhone");

let inps = document.getElementsByTagName("input"); 

function clearForm() {
    for(let i=0; i<inps.length;i++) {

        inps[i].value = "";
    }
}

function addUser() {
    console.log(userNameInp.value)
    var user = {name: userNameInp.value}
    var user = {name:userNameInp.value , age:userAgeInp.value , mail:userMailInp.value , phone:userPhoneInp.value};

    usersData.push(user);

    localStorage.setItem("myData" , JSON.stringify(usersData))

    displayData();
   clearForm();

}

function displayData() {
    var temp = "";
    for(let i =0; i<usersData.length; i++) {
        temp += "<tr><td>"+usersData[i].name+"</td><td>"+usersData[i].age+"</td><td>"+usersData[i].mail+"</td><td>"+usersData[i].phone+"</td></tr>"; 
    }
    document.getElementById("tableBody").innerHTML = temp;
}

displayData()



