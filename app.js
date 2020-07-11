// // function getNumber(num){
// //     Var result = document.getElementById("result");
// // Result.value = " "
// // }

// // function getnumber(num){
// //     Var result = document.getElementById("result");
// // Result.value = eval(result.value)
// // }




// function getNumber(num) {

//     console.log(num);
//     var result = document.grtElementById("result");
//     // result.value += num;
    
// }



function getNumber(num) {

    
    var result = document.getElementById("result");
    result.value += num;
    
}
function clearAll(){
    var result = document.getElementById("result");
    result.value = "";
}
function finalResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}