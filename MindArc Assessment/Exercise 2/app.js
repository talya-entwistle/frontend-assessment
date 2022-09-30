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
let tab = document.querySelectorAll('.info-header-tab'),
			info = document.querySelector('.info-header'),
			tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;

		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			} 
		} 
	});


