// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
let movies_append=document.getElementById("movies");
let money=localStorage.getItem("amount");
document.getElementById("wallet").innerText=money;

async function showmovies()
{
    try{
        let search=document.getElementById("search").value;
        let res=await fetch(`https://www.omdbapi.com/?s=${search}&apikey=1b305d1d`);
        let data=await res.json();
        movies(data.Search);
    }
    catch(err)
    {
        console.log(err);
    }
  
}
let movies =(data)=>
{
    movies_append.innerHTML=null;
    data.forEach(function(el)
    {
        let box=document.createElement("div");
        box.setAttribute("id","box");
        let poster=document.createElement("img");
        poster.setAttribute("id","poster")
        let title=document.createElement("h1");
        let book=document.createElement("button")
        book.setAttribute("class","book_now");
       
        console.log(el);

        poster.src=el.Poster;
        title.innerText=el.Title;
        book.innerText="Book Now";
        book.addEventListener("click",bookfun)
        function bookfun()
        {
            let pos=poster.src;
            let tit=title.innerText;
            let arr=[pos,tit];
            localStorage.setItem("movies",arr);
            window.location.href="checkout.html"
        }
        box.append(poster,title,book);
        movies_append.append(box);

    })
}
async function main()
{
    let data=await showmovies();

    if(data==undefined)
    {
        return false;
    }
    showmovies();
}
function debounce(main,delay)
{
    if(id)
    {
        clearTimeout(id);
    }
   id=setTimeout(function()
   {
      main();
   },delay) 
}