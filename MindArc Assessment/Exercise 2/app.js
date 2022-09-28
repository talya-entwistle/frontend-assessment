//accordion js


var accordion = document.getElementsByClassName('accordion__button');

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


// for each index of accordion__button
// for (var i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function() {

//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
        
//         //toggle the 'active' class on or off
//         this.classList.toggle("active");

//         // if the 'active' class is toggled, view the contents of that index
//         // otherwise, if the 'active' class is already toggled when clicked, hide the contents
//         var accordionContent = this.nextElementSibling;

//         for(var k = 0; k < accordionContent.length; k++) {
//             if(this.nextElementSibling != accordionContent[k]) {
//                 accordionContent[k].classList.toggle("show");
//             }

//             this.nextElementSibling.classList.toggle("show");
//         }
        
//         if (accordionContent.style.display === "block") {
//             accordionContent.style.display = "none";
//         } else {
//             accordionContent.style.display = "block";
//         }
//     });  
// }

//show contents of the first accordion index by default
document.getElementById("openByDefault").click();




const tabs = Vue.createApp({
    data() {
        return {
            showData: true,
            data: [
                {
                  "title": "Section 1",
                  "content": "Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere."
                },
                {
                  "title": "Section 2",
                  "content": "Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id."
                },
                {
                  "title": "Section 3",
                  "content": "Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>"
                },
                {
                  "title": "Section 4",
                  "content": "Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                }
              ]
        }
    },
    methods: {
        toggleShowData() {
            this.showData = !this.showData
        },
        handleEvent() {
            console.log('event')
        },
        handleMouseMove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})

tabs.mount('.tabs__test')