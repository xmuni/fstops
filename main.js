'use strict';

var fsteps = document.querySelectorAll(".fstep");

console.log("Hello")
console.log("Number of fstops:")
console.log(fsteps.length)
for(var i=0; i<fsteps.length; i++)
{
    fsteps[i].addEventListener("click", toggle_select);
}

document.querySelector("#btn_reset").addEventListener("click", reset_selected)

function highlight_average_fstop()
{
    var selected = [];
    for(var i=0; i<fsteps.length; i++)
        if(fsteps[i].classList.contains("selected"))
            selected.push(i);
    console.log("Selected:");
    console.log(selected);

    for(var i=0; i<fsteps.length; i++)
        fsteps[i].classList.remove("highlighted");

    if(selected.length >= 2)
    {
        var average = (selected[0]+selected[1]) / 2;
        console.log(average)
        fsteps[Math.ceil(average)].classList.add("highlighted");
    }
}

function toggle_select()
{
    // console.log("Hello");
    // console.log(this.innerText);
    if(this.classList.contains("selected"))
        this.classList.remove("selected");
    else
        this.classList.add("selected");
    
    highlight_average_fstop();
}

function reset_selected()
{
    console.log("Resetting selected");
    for(var i=0; i<fsteps.length; i++)
    {
        fsteps[i].classList.remove("selected");
        fsteps[i].classList.remove("highlighted");
    }
}