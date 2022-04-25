// Store the wallet amount to your local storage with key "amount"
let addmoney = ()=>
{
    let money=Number(localStorage.getItem("amount"))+Number(document.getElementById("amount").value);
    localStorage.setItem("amount",money)
    window.location.reload();
}
let money1=Number(localStorage.getItem("amount"));
document.getElementById("wallet").innerText=money1;
let bookmovies=()=>
{
    window.location.href="movies.html";
}