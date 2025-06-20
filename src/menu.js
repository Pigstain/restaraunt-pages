import menuImage from './menu.jpg'
export function createMenu(){
    let content = document.getElementById("content");
    let image = document.createElement("img");
    image.src = menuImage;
    image.setAttribute("width","300px");
    image.setAttribute("height","500px");
    content.appendChild(image);
}