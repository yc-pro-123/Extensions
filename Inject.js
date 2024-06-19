// you can write the code here that you want to inject
var sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
var twir = async () => {
  await sleep(5000);
  
var t=document.querySelector("button[aria-label='Member-only story']  p");
console.log(t);
t=t.innerHTML;
if(t=="Member-only story"){
    if(confirm("It's a Member-only story, Do you want to open it in READ MEDIUM")){
    var s= window.location.href.split("/");
console.log(s[s.length-1]);
window.open("https://www.readmedium.com/"+s[s.length-1],"_blank");
}
}
}

twir();

