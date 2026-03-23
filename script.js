// Typing Animation
const text = [
"> system initialized...",
"> access granted"
];

let line = 0;
let char = 0;
const typing = document.getElementById("typing");

function type(){
if(line < text.length){
if(char < text[line].length){
typing.textContent += text[line].charAt(char);
char++;
setTimeout(type,50);
}else{
typing.textContent += "\n";
line++;
char = 0;
setTimeout(type,500);
}
}
}
type();


// TERMINAL
const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

input.addEventListener("keydown",function(e){
if(e.key==="Enter"){
const cmd=input.value.trim();
print("> "+cmd);

switch(cmd){
case "whoami":
print("Knull - Developer in progress");
break;

case "skills":
print("HTML CSS JavaScript Linux");
break;

case "help":
print("Commands: whoami, skills, help, clear");
break;

case "clear":
output.innerHTML="";
break;

default:
print("command not found");
}

input.value="";
}
});

function print(text){
const p=document.createElement("div");
p.textContent=text;
output.appendChild(p);
}
