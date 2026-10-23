
function changeStyle() {
    let div = document.getElementById("box");

    div.style.backgroundColor = "blue";
    div.style.height = "250px";
    div.style.width = "250px";
    div.style.border = "4px solid black";
    div.style.borderRadius = "10px";

    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";

    div.textContent = "Hello JavaScript!";  
}

function chnageBack()
{
      let div = document.getElementById("box");
      div.style.height="100px";
      div.style.width="100px";
      div.style.color="green";
      div.textContent="bact to Original Name";
}