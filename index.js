// var t1 = document.getElementById("t1")
// var t2 = document.querySelector("#t2")
// var t3 = document.querySelector("#t3")
// var t4 = document.querySelector("#t4")
// var t5 = document.querySelector("#t5")
// var t6 = document.querySelector("#t6")
// var t7 = document.querySelector("#t7")




// function overlie(name) {
//     name.style.color = "red";
//     name.style.textDecoration = "line-through";
// }

// function clr(name) {
//     if (name.checked = false) {
//     console.log("neden")
//     name.style.color = "blue";
//     name.style.textDecoration = "none"; 
//     }
// }

// function myFun(name) {
//     clr(name);
//     overlie(name);
    
// }

function counter(name) {
    var count = document.getElementById(name)
    var txt = parseInt(document.getElementById("ctr").innerText);
    var i;
    if( count.checked){
            txt += parseInt(count.value);
        }else{
            txt -= parseInt(count.value);
        }
    document.getElementById("ctr").innerHTML = txt
    
    }