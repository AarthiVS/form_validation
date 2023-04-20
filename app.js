alert("afa");
function form(){
  let a = document.getElementById("n").value;
  let b = document.getElementById("e").value;
  let c = document.getElementById("p").value;
  let d = document.getElementById("c").checked;

  if(a==""){
    alert("enter your name");
  }
  if(b==""){
    alert("enter your mail");
  }
  if(c==""){
    alert("enter your password");
  }
  if(d==false){
    alert("accept")
  }
}
