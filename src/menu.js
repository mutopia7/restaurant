import "./styles.css"
import "./menu.css"
import eatingGif from "./pictures/eating.gif";

function createMenuPage(){
    const mainContent = document.querySelector("#content");
    mainContent.innerHTML = "";
    mainContent.classList.remove("home");
    mainContent.classList.remove("about");
    mainContent.classList.add("menu")

    const explain = document.createElement("p");
    explain.textContent = "The number of pages read you entered on the site is zero. So you cannot order any food.";
    const icon = document.createElement("img");
    icon.src = eatingGif;
    icon.classList.add("icon")
    const icon2 = document.createElement("img");
    icon2.src = eatingGif;
    icon2.classList.add("icon")
    mainContent.append(icon , explain, icon2)
}

export {createMenuPage}