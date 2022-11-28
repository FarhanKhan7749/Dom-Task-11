var form = document.querySelector("#my-form");
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
//console.log(emailInput);
let userList = [];
form.addEventListener('submit', (e) =>{;
    e.preventDefault();
    let user ={
        name : nameInput.value,
        email : emailInput.value,
    } 
   //console.log(user);
    userList.push(user);
    document.querySelector("#my-form").reset();
    //console.log(userList);
    userSeralized = JSON.stringify(userList);
    localStorage.setItem("user",userSeralized);

    //nameInput.value = "";
    //emailInput.value = "";    
});
