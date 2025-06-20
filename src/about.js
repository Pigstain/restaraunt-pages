import restImage from "./building.jpg"
export function createAbout(){
    let content = document.getElementById("content");
    let image = document.createElement("img");
    image.src=restImage;
    image.width="500";
    image.height="500";
    let paragraph = document.createElement("p");
    paragraph.textContent="We are a fictional family owned business";
    content.appendChild(image);
    content.appendChild(paragraph);
}