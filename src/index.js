import { createHomePage} from "./home.js"

createHomePage()

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener("click", ()=> {
    createHomePage()
});





console.log("webpack is runed")