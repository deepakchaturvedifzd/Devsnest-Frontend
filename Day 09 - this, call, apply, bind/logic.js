const pixels = document.getElementsByClassName("pixel");
var remainingVar=36;
var bookedVar = 0;
var remainingSeats = document.querySelector(".remainingSeats");
var bookedSeats = document.querySelector(".bookedSeats");
for(var i=0;i<pixels.length;i++)
{
    pixels[i].addEventListener('click',(e)=>
    {
        if(e.target.classList.contains("checked"))
        {
            e.target.classList.remove("checked");
            bookedVar--;
            bookedSeats.innerHTML="Booked Seats : "+bookedVar;
            remainingVar++;
            remainingSeats.innerHTML="Remaining Seats : "+remainingVar;
        }
        else{
            e.target.classList.add("checked");
            bookedVar++;
            bookedSeats.innerHTML="Booked Seats : "+bookedVar;
            remainingVar--;
            remainingSeats.innerHTML="Remaining Seats : "+remainingVar;
        }
    });
}