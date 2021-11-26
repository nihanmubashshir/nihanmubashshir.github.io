"use strict"

let numbers = document.getElementById("numpad").querySelectorAll("button");
let main_screen_data = "";
var myArr = Array.from(numbers);

for (let i =0;i<myArr.length;i++){
    if( !(["reset","equal"].includes(myArr[i].id))){
    myArr[i].value_inside = myArr[i].innerHTML
    myArr[i].addEventListener("click",whateverInside);
    }
}

function keepTrack(foo){
    main_screen_data+=foo;
    console.log(main_screen_data)
    return main_screen_data
}


function whateverInside(some) //where .innerHtml works
{
    let x = some.currentTarget.value_inside;

    document.getElementById("screen").innerHTML = keepTrack(x);
}




function equal(){

    let result = eval(main_screen_data);   

    document.getElementById("result").innerHTML = result;

}
function reset(){

    main_screen_data = "";
    document.getElementById("result").innerHTML = 0;
    document.getElementById("screen").innerHTML = 0;

}

document.getElementById("equal").addEventListener("click",equal);
document.getElementById("reset").addEventListener("click",reset);