import { createHomePage} from "./home.js"
import { createMenuPage} from "./menu.js"
import { createAboutPage } from "./about.js";

createHomePage()

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener("click", ()=> {
    createHomePage()
});

menu.addEventListener("click", ()=> {
    createMenuPage()
});

about.addEventListener("click", ()=> {
    createAboutPage()
})





console.log("webpack is runed")