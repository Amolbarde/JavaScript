let arr = ["pune","mumbai","delhi"];
arr.forEach(function printval(val)
{
  console.log(val);   
})

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
})
