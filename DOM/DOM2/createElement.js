let NewBtn = document.createElement("button");
console.log(NewBtn)
NewBtn.innerText="Show";

let div = document.querySelector("div");
div.append(NewBtn);
div.prepend(NewBtn);
div.before(NewBtn);
div.after(NewBtn);  

let p = document.getElementById("para");
para.prepend(NewBtn);

//create new heading

let newHeding = document.createElement("h1");
newHeding.innerHTML = "<i>HI, I am New</i>";


 document.querySelector("body").prepend(newHeding);
