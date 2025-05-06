import "./styles.css"
import "./home.css"


function createHomePage(){
    const mainContent = document.querySelector("#content");
    mainContent.innerHTML = "";
    mainContent.classList.remove("about");
    mainContent.classList.remove("menu");
    mainContent.classList.add("home");
    const explain = document.createElement("p");
    explain.textContent = "In this restaurant, the price of meals is not in dollars, but in the number of pages of a book that the customer has read."
    mainContent.append(explain)
    
}

export {createHomePage}