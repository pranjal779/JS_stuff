//Declare your variable here
var myGlobal = 10;

function fun1(){
    //Assign 5 to oopsGlobsl here
    oopsGlobal = 5;
}

//Only change code above this line
function fun2(){
    var output = "";
    if(typeof myGlobal != "undifined"){
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal; 
    }
    console.log(output);
}

fun1();
fun2();