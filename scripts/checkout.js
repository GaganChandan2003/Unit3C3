// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = localStorage.getItem("amount");
document.getElementById("wallet").innerText=amount;

let booked_movies=localStorage.getItem("movies");
let box=document.createElement("div");
let image=document.createElement("img");
let title=document.createElement("h2");
 image.src=booked_movies;

 box.append(title,image);
 document.getElementById("movie").append(box);

 let confirm =()=>
 {
     let name=document.getElementById("user_name").value;
     let seats=document.getElementById("number_of_seats").value;
     let price=Number(seats)*100;
     let balance=localStorage.getItem("amount");
     if(price<=Number(balance))
     {
         alert("Booking successful!");
         localStorage.setItem("amount",balance-price);
         window.location.reload();
     }
     else{
         alert("Insufficient Balance!");
     }
 }