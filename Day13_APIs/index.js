const myURL="https://meme-api.herokuapp.com/gimme";
const btn = document.querySelector("button");
const maymayContainer=document.querySelector(".memeContainer");

btn.addEventListener('click',async()=>{
    var res=await fetch(myURL);
    var data = await res.json();
    console.log(data.url);
    var img=document.createElement('img');
    img.src=data.url;
    console.log(img);
    maymayContainer.appendChild(img);
});
