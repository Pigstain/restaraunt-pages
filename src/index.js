import "./styles.css";

import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
console.log(greeting);
/*import odinImage from "./odin.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);*/
function clear(){
    let board = document.getElementById("content");
    board.innerHTML="";
}
let home = document.getElementById("home");
home.addEventListener("click",()=>{
    clear();
    createHome();
});
let menu = document.getElementById("menu");
menu.addEventListener("click",()=>{
    clear();
    createMenu();
});
let about = document.getElementById("about");
about.addEventListener("click",()=>{
    clear();
    createAbout();
});