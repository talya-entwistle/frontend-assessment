<template>
    <section class="tab__container">
    <div class="tab__background">
        <button class="tab__links" onclick="openTab(evt, '1')">1</button>
        <button class="tab__links" onclick="openTab(evt, '2')">2</button>
        <button class="tab__links" onclick="openTab(evt, '3')">3</button>
      </div>
      
      <!-- Tab content -->
      <div id="1" class="tab__content">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>
      
      <div id="2" class="tab__content">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>
      
      <div id="3" class="tab__content">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </section>
</template>

<script>

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
</script>

<style>
.tab__container {
  display: none;
}

.tab__background {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

.tab__background .tab__links {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

.tab__background .tab__links:hover {
  background-color: #ddd;
}

.tab__background .tab__links.active {
  background-color: #ccc;
}

.tab__content {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

@media (min-width: 769px) {
    .tab__container {
        display: block;
    }
}
</style>
