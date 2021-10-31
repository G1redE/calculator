const resultoutput = document.getElementById('calc-result-output');




function display(str){

    resultoutput.innerText+=str;
    let resstring=resultoutput.innerText;
   
}
function clear1(){
    resstring=resultoutput.innerText;
    
    resstring=resstring.slice(0,resstring.length-1);
    resultoutput.innerText=resstring;
  
    
}
function allclear(){
    resultoutput.innerText='';
    resstring='';
}
function percent(){
    let str = resultoutput.innerText;
    str=str/100;
    resultoutput.innerText=str;
}

function calculate(){
    if(resultoutput.innerText == ''||resultoutput.innerText == '+'||resultoutput.innerText == '/'||resultoutput.innerText == '*') 
    {
        alert('Please give input');
        resultoutput.innerText='';
    }
    else{
   let str =  eval(resultoutput.innerText);
   resultoutput.innerText = str;
    }
}