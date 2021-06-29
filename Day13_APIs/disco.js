// THIS WILL SEND RANDOM MEMES TO YOUR DISCORD SERVER

const btn= document.querySelector("button");
const myWebhookURL=""; // use your own URL here
const myMemeURL="https://meme-api.herokuapp.com/gimme";

btn.addEventListener('click',async()=>{
    console.log("ok");
    var res1=await fetch(myMemeURL);
    var data1 = await res1.json();
    var res=await fetch(myWebhookURL,
        {
            method: 'post',
    headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
    },
    body:JSON.stringify({content:data1.url})
        })
    var data = await res.json()
    console.log(data)
});
