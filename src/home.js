import backgroundImage from './rest.jpg';
export function createHome(){
    let content = document.getElementById("content");
    let header = document.createElement("h1");

    header.textContent="This is a restaurant";
    let image  = document.createElement("img");
    //let image = document.getElementById("image");
    image.src = backgroundImage;
 
    let paragraph = document.createElement("p");
    paragraph.textContent="this is a wonderful restaurant";
    content.appendChild(header);
    content.appendChild(image);
    content.appendChild(paragraph);
}