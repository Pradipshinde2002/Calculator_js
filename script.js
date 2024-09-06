var resultDiv=document.getElementById("resText")


function appendValue(value){
    if(resultDiv.value==="0"){
        resultDiv.value=value
    }
    else{
        resultDiv.value=resultDiv.value+value
    }
}

function appendValueDZero(){
    var a=0;
    var b=0;
    resultDiv.value=resultDiv.value+a; 
    resultDiv.value=resultDiv.value+b;

}

function calculate(){

    resultDiv.value=eval(resultDiv.value)
    
}

function backFun(){
    resultDiv.value=resultDiv.value.slice(0,-1)
}


function clearScreen(){
    resultDiv.value=""
}