const btn= document.querySelector("button");
const myWebhookURL="https://discord.com/api/webhooks/858448961413054497/GNxOWMcsyRf1sSd8UjBGP-gZrn0U4j-erTLd-djgtUyMumwjEyOMy47a2oKp6zwSRqbC";
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