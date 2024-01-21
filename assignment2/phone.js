// Name: Julia Bays
// Overview: All of the functions for all the phone.js

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dialer").style.display = "block";
    document.getElementById("contact_list").style.display = "none";
    document.getElementById("newContact").style.display = "none";
    document.getElementById("testgestures").style.display = "none";
});

// Tab Buttons
document.getElementById("tab1").addEventListener("click", function(event) {
    // when "tab1" is clicked
    event.preventDefault(); // Prevent default form submission behavior
    document.getElementById("dialer").style.display = "block";
    document.getElementById("contact_list").style.display = "none";
    document.getElementById("newContact").style.display = "none";
    document.getElementById("testgestures").style.display = "none";
});

document.getElementById("tab2").addEventListener("click", function(event) {
    // when "tab2" is clicked
    event.preventDefault(); // Prevent default form submission behavior
    document.getElementById("dialer").style.display = "none";
    document.getElementById("contact_list").style.display = "block";
    document.getElementById("newContact").style.display = "none";
    document.getElementById("testgestures").style.display = "none";
});

document.getElementById("tab3").addEventListener("click", function(event) {
    // when "tab3" is clicked
    event.preventDefault(); // Prevent default form submission behavior
    document.getElementById("dialer").style.display = "none";
    document.getElementById("contact_list").style.display = "none";
    document.getElementById("newContact").style.display = "block";
    document.getElementById("testgestures").style.display = "none";
});

document.getElementById("tab4").addEventListener("click", function(event) {
    // when "tab4" is clicked
    event.preventDefault(); // Prevent default form submission behavior
    document.getElementById("dialer").style.display = "none";
    document.getElementById("contact_list").style.display = "none";
    document.getElementById("newContact").style.display = "none";
    document.getElementById("testgestures").style.display = "block";
});

// Function to validate input and allow only numbers
function validateInput(inputField) {
    // Remove non-numeric characters using a regular expression
    var numericValue = inputField.value.replace(/\D/g, '');
 
    // Check if there are alphabetical letters
    if (/[a-zA-Z]/.test(inputField.value)) {
        alert("No alphabetical letters allowed");
        inputField.value = '';
    } else {
        // Limit to 10 digits
        numericValue = numericValue.slice(0, 10);
 
        // Format as a phone number
        var formattedValue = formatPhoneNumber(numericValue);
 
        // Set the formatted value back to the input field
        inputField.value = formattedValue;
    }
 }
 
 // Function to format numbers as a phone number
 function formatPhoneNumber(value) {
    // Assuming a 10-digit format, you can modify this based on your needs
    var formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    return formattedValue;
 }

// Dial Buttons
document.getElementById("dial1").addEventListener("click", function() {
    // when "dial1" is clicked
    document.getElementById("dialerText").value += "1";
});

document.getElementById("dial2").addEventListener("click", function() {
    // when "dial2" is clicked
    document.getElementById("dialerText").value += "2";
});

document.getElementById("dial3").addEventListener("click", function() {
    // when "dial3" is clicked
    document.getElementById("dialerText").value += "3";
});

document.getElementById("dial4").addEventListener("click", function() {
    // when "dial4" is clicked
    document.getElementById("dialerText").value += "4";
});

document.getElementById("dial5").addEventListener("click", function() {
    // when "dial5" is clicked
    document.getElementById("dialerText").value += "5";
});

document.getElementById("dial6").addEventListener("click", function() {
    // when "dial6" is clicked
    document.getElementById("dialerText").value += "6";
});

document.getElementById("dial7").addEventListener("click", function() {
    // when "dial7" is clicked
    document.getElementById("dialerText").value += "7";
});

document.getElementById("dial8").addEventListener("click", function() {
    // when "dial8" is clicked
    document.getElementById("dialerText").value += "8";
});

document.getElementById("dial9").addEventListener("click", function() {
    // when "dial9" is clicked
    document.getElementById("dialerText").value += "9";
});

document.getElementById("dial0").addEventListener("click", function() {
    // when "dial0" is clicked
    document.getElementById("dialerText").value += "0";
});

// Clear Button
document.getElementById("dialClear").addEventListener("click", function () {
    document.getElementById("dialerText").value = "";
});

// Dial Button (Simulation Call)
document.getElementById("dialDial").addEventListener("click", function () {
    var phoneNumber = document.getElementById("dialerText").value;
    if (phoneNumber !== "") {
        alert("Calling " + phoneNumber);
    } else {
        alert("Please enter a phone number before dialing.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to adding a contact
    function addContact() {
        // Get input values
        var name = document.getElementById("name").value;
        var number = document.getElementById("number").value;
        var email = document.getElementById("email").value;

        // Check if all fields are provided
        if (name && number && email) {
            // Create a new contact object
            var contact = {
                name: name,
                number: number,
                email: email
            };

            // Add the new contact name to the contact list
            var contactList = document.getElementById("contact_list");
            var newContactItem = document.createElement("ul");
            newContactItem.appendChild(document.createTextNode(name));
            contactList.appendChild(newContactItem);
            alert("A new contact has been added in the contacts tab.");

            // Clear input fields after adding to the list
            clearForm();
        } else {
            alert("Please enter all fields before adding a contact.");
        }
    }

    // Function to clearing the form
    function clearForm() {
        // Clear input fields in the contact form
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
        document.getElementById("email").value = "";
    }

    // Adding a contact
    document.getElementById("addContact").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission behavior
        addContact(); // Call the addContact function
    });

    // Clearing the form
    document.getElementById("clearForm").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission behavior
        clearForm(); // Call the clearForm function
    });
});

// Gesture buttons/recognition
document.addEventListener("DOMContentLoaded", function () {
    let isMouseDown = false;
    let startX, endX;

    const gestureArea = document.getElementById('gestureArea');

    gestureArea.addEventListener('mousedown', (event) => {
        isMouseDown = true;
        startX = event.clientX;
    });

    gestureArea.addEventListener('mousemove', (event) => {
        if (isMouseDown) {
            endX = event.clientX;
        }
    });

    gestureArea.addEventListener('mouseup', () => {
        if (isMouseDown) {
            isMouseDown = false;
            const deltaX = endX - startX;

            if (deltaX > 0) {
                console.log('Swipe right');
            } else if (deltaX < 0) {
                console.log('Swipe left');
            } else {
                console.log('Mouse released without swipe');
            }
        }
    });
});