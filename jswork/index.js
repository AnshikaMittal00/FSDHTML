console.log("hello");
function fun(a,b){
    console.log("hii");
    return a+b;
}
const button=document.getElementById('btn') 
button.addEventListener("click")
const result=fun(1,2);
console.log(result);
function cCompiler()
{
    
 return " c compiler"
}
function javaCompiler(){

}
function selectlanguage(clbk){
    console.log("inside");
return "hii"+clbk();
}
console.log(selectlanguage(cCompiler));
   