const puppy = document.getElementById("puppyP");
const siblings = document.getElementById("siblings");
const button = document.getElementById("picButton")

picButton.addEventListener('click', function(){
    if(siblings.style.display === "inherit"){
    siblings.style.display= "none";
    puppy.style.display= "inherit";
}else if(puppy.style.display= "inherit")
{
    siblings.style.display= "inherit";
    puppy.style.display= "none";
}
})