function showTab(tabId) {
    // Hide all tabs
    var tabs = ["home", "about", "contributors"];
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
    showTab("about");
});

document.getElementById("tab3").addEventListener("click", function(event) {
    event.preventDefault();
    showTab("contributors");
});

/* Comment function */
function submitComment() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    if (comment.trim() !== "") {
        // Display the alert
        alert("Thank you for your comment!");

        // Display the comment below
        var commentsContainer = document.getElementById("comments");
        var newComment = document.createElement("div");
        newComment.classList.add("comment");

        var commenterInfo = document.createElement("p");
        commenterInfo.innerHTML = "<span class='name'>Name: " + name + "</span>, <span class='email'>Email: " + email + "</span>";

        var commentContent = document.createElement("p");
        commentContent.textContent = comment;

        newComment.appendChild(commenterInfo);
        newComment.appendChild(commentContent);
        commentsContainer.appendChild(newComment);

        // Clear the form fields after submitting
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("comment").value = "";
    } else {
        alert("Please enter a comment before submitting.");
    }
}

