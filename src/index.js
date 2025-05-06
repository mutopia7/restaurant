import { createHomePage} from "./home.js"
import { createMenuPage} from "./menu.js"

createHomePage()

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener("click", ()=> {
    createHomePage()
});

menu.addEventListener("click", ()=> {
    createMenuPage()
})



console.log("webpack is runed")