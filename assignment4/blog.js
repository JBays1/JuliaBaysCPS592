function showTab(tabId) {
    // Hide all tabs
    var tabs = ["home", "projects", "about"];
    tabs.forEach(function(tab) {
        document.getElementById(tab).style.display = "none";
    });

    // Show the selected tab
    document.getElementById(tabId).style.display = "block";
}

// Show the "Home" tab by default
showTab("home");

// Tab Buttons
document.getElementById("tab1").addEventListener("click", function(event) {
    event.preventDefault();
    showTab("home");
});

document.getElementById("tab2").addEventListener("click", function(event) {
    event.preventDefault();
    showTab("projects");
});

document.getElementById("tab3").addEventListener("click", function(event) {
    event.preventDefault();
    showTab("about");
});