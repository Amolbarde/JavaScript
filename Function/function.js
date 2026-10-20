function MyFunction(msg)
{
    console.log("Amol Barde");
    console.log("savitribai phule pune university ");
    console.log(msg)
}
MyFunction("Amol");

function sum(x,y)
{
    console.log(x+y);
}

let s = sum(99,1);
if(s==100)
{
    console.log("sum is 100");
}

function mul(x,y)
{
    console.log("Before return");
    
    s=x*y;
    return s;
    console.log("After return");

}
var ans=mul(10,9);
if(ans<50)
{
    console.log("Answer is small");
}
else{
    console.log("Answer is big");
}