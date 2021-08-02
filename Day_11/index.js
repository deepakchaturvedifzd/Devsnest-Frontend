const question=document.querySelector('.question');
const optionBox=document.getElementsByClassName('optionbox');
const option=document.getElementsByClassName('option');
const nxtBtn = document.querySelector(".nxtBtn");
const score=document.querySelector(".score");
const quesNum=document.querySelector(".quesNum");

const quesArr=["","Harry has a scar on his forehead. What shape is it?",
"From which platform at Kings Cross does the Hogwarts Express train depart?",
"How do the Dursleys say that Harrys parents died?",
"On a Quidditch pitch, how many goal posts are there in total?",
"In Harry Potter and the Philosophers Stone, who reports the commentary for the Quidditch matches at Hogwarts?"];

const optionArr=["",["Like a pigs tail","Like a lightning bolt","Like a shining star","Like an egg"],
["Gringotts","wand","Nine and three-quarters","The trolls club"],
["In a car crash","In an aeroplane crash","By Cancer","By Heart Attack"],
["Four","Five","Six","Seven"],
["Albus Dumbledore","Mrs Norris","Lee Jordan","Professor Sprout"]];

var ansArr=[0,2,3,1,3,3];
var firstClick=true;
var totalQues=5;
var currQues=1;
var scoreVal=0;

//click events on buttons and conditions


for(let i=0;i<optionBox.length;i++)
{
    optionBox[i].val=i+1;
    optionBox[i].addEventListener('click',(e)=>{
        if(e.target.val==ansArr[currQues])
        {
            if(firstClick)
            {
                scoreVal++;
                console.log("Right Answer",e.target.val);
                firstClick=false;
                e.target.classList.add("right");
            }
        }

        else
        {
            if(firstClick)
                {
                console.log("Wrong Answer",e.target.val);
                firstClick=false;

                e.target.classList.add("wrong");

                optionBox[ansArr[currQues]-1].classList.add("right");         
                }
        }
    }); 
}

// next button to traverse through questions

nxtBtn.addEventListener('click',()=>{
    if(currQues<totalQues)
    {
        currQues++;
        firstClick=true;
        console.log(currQues);

        for(let i=0;i<optionBox.length;i++)
        {
            if(optionBox[i].classList.contains('right'))
            {
                optionBox[i].classList.remove('right');
            }

            if(optionBox[i].classList.contains('wrong'))
            {
                optionBox[i].classList.remove('wrong');                
            }
        }
    }

});

// to set score board and make the buttons non-hovorable after one click

setInterval(()=>{
    question.innerHTML=quesArr[currQues];

    for(let i=0;i<optionBox.length;i++)
    {
        option[i].innerHTML=optionArr[currQues][i];
    }
    score.innerHTML="SCORE : "+scoreVal;
    quesNum.innerHTML="Question No. : "+currQues+"/"+totalQues;

    if(!firstClick)
    {
        for(let i=0;i<optionBox.length;i++)
        {
            optionBox[i].style.pointerEvents="none";
        }
    }
    else{
        for(let i=0;i<optionBox.length;i++)
        {
            optionBox[i].style.pointerEvents="auto";
        }        
    }
},1);

