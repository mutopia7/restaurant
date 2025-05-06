import "./styles.css"
import "./about.css"

function createAboutPage(){
    const mainContent = document.querySelector("#content");
    mainContent.innerHTML = "";
    mainContent.classList.remove("home");
    mainContent.classList.remove("menu");
    mainContent.classList.add("about")

    const explain = document.createElement("p");
    explain.textContent = "We started our work when we saw that people eat their food, but they don't care about their brain food.";
    mainContent.append(explain)
}

export {createAboutPage}