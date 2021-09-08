function displayResults(){
    var Name = document.getElementById("fname").value;
    var Surname = document.getElementById("lname").value;
    var Address = document.getElementById("add").value;
    var Phone = document.getElementById("pnumber").value;
    var Tour = document.getElementById("tour").value;
    var Price = document.getElementById("price").value;
    var Language = document.getElementById("lang").value;
    var Time = document.getElementById("time").value;
    
    
    localStorage.setItem("firstName", Name);
    localStorage.setItem("lastName", Surname);
    localStorage.setItem("address", Address);
    localStorage.setItem("phoneNumber", Phone);
    localStorage.setItem("tour", Tour);
    localStorage.setItem("price", Price);
    localStorage.setItem("language", Language);
    localStorage.setItem("timeSlot", Time);
    
    return true;
}
    
function getResults(){
    var Name = localStorage.getItem("firstName");
    var Surname = localStorage.getItem("lastName");
    var Address = localStorage.getItem("address");
    var Phone = localStorage.getItem("phoneNumber");
    var Tour = localStorage.getItem("tour");
    var Price = localStorage.getItem("price");
    var Language = localStorage.getItem("language");
    var Time = localStorage.getItem("timeSlot");
    

    document.getElementById("results").innerHTML= `<b>First Name:<b> ${Name} <br><b>Last Name:</b> ${Surname} <br><b>Address:</b> ${Address} <br><b>Phone number:</b> ${Phone} <br><b>Selected tour:</b> ${Tour} <br><b>Price:</b> ${Price} <br><b>Preferred language:</b> ${Language} <br><b>Time Slot:</b> ${Time}`;  
} 

//price
let packageType = document.getElementById("tour").value;
const tax=0.05;
const shopping=5000;
const heritage=6000;
const food=5500;
let price = 0;
let package = document.getElementById("tour")
function changePrice(){
    if (package="Shopping")
      {price= price + shopping+shopping*tax;}
    else if (package="Heritage Walk")
      {price= price + heritage+heritage*tax}
    else if(package="Food Tour")
      {price= price + food+food*tax}
    document.getElementById("price").innerHTML= `<b>&#8377; ${price}</b>`;
}