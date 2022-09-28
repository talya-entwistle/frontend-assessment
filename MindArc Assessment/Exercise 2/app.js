const accordion = document.getElementsByClassName("accordion__button");

for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var accordionContent = this.nextElementSibling;
        
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });  
}

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