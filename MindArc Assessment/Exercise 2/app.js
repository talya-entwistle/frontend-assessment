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
var tabs = document.getElementsByClassName("tab__links");

function openTab(evt, tabNumber) {
    // Declare all variables
    var tabContent
    var tabLinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabContent = document.getElementsByClassName("tab__content");
    for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    // Get all elements with class="tab__links" and remove the class "active"
    tabLinks = document.getElementsByClassName("tab__links");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabNumber).style.display = "block";
    evt.currentTarget.className += " active";
  }

  tabs.addEventListener("click", function() {
    openTab();
  })

