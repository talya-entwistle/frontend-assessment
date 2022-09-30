import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App).mount('#app')

//accordion js
var accordion = document.getElementsByClassName("accordion__button");

//for each index of accordion__button
for(var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() { 

        // if the accordion contents are not visble, display them
        // otherwise, remove the contents from view
        var accordionContent = this.nextElementSibling;
        
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        
        } else {
            accordionContent.style.display = "block";
            
            //if the contents of one accordion__button is already open when another accordion__button is clicked
            //close the previously opened content
            for(var k = 0; k < accordion.length; k++){
                if(this.classList != accordion[k].classList) {
                    accordion[k].classList.remove("active");
                    accordion[k].nextElementSibling.style.display = "none";  
                }
            }
        }
    });
}

//show contents of the first accordion index by default
document.getElementById("openByDefault").click();



//tab js
document.querySelectorAll(".tab__button").forEach(button => {
    button.addEventListener("click", () => {
        var sidebar = button.parentElement;
        var tabContainer = sidebar.parentElement;
        var tabToActivate = tabContainer.querySelector(".tab__content");

        console.log(sidebar);
        console.log(tabContainer);
        console.log(tabToActivate);
        
        sidebar.querySelectorAll(".tab__button").forEach(button => {
            button.classList.remove("is__active");
        });

        tabContainer.querySelectorAll(".tab__content").forEach(tab => {
            tab.classList.remove("is__active");
        });

        button.classList.add("is__active");
        tabToActivate.classList.add("is__active");
    });
});