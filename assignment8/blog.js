function showTab(tabId) {
  // Hide all tabs
  var tabs = ["home", "about", "contributors"];
  tabs.forEach(function (tab) {
    document.getElementById(tab).style.display = "none";
  });

  // Show the selected tab
  document.getElementById(tabId).style.display = "block";
}

// Show the "Home" tab by default
showTab("home");

// Tab Buttons
document.getElementById("tab1").addEventListener("click", function (event) {
  event.preventDefault();
  showTab("home");
});

document.getElementById("tab2").addEventListener("click", function (event) {
  event.preventDefault();
  showTab("about");
});

// this gives us the order of the buttons, which we can use to step through the buttons in various directions
// since we know the layout, + 1 moves to the next item, -1 previous, +4 is one row down, -4 is one row up
buttonOrder = [
  "#button7",
  "#button8",
  "#button9",
  "#buttonDivide",
  "#button4",
  "#button5",
  "#button6",
  "#buttonMultiply",
  "#button1",
  "#button2",
  "#button3",
  "#buttonAdd",
  "#button0",
  "#buttonClear",
  "#buttonEquals",
  "#buttonSubtract",
];

// add the selected class to an item. you can pass this any jquery selector, such as #id or .class
// calling this will de-select anything currently selected
function selectItem(name) {
  $("button").removeClass("cursor");
  $(name).addClass("cursor");
}

// gets the currently selected item, and returns its #id
// returns null if no item is selected
// note that if multiple items are selected, this will only return the first
// but you could rewrite this to return a list of items if you wanted to track multiple selections
function getSelectedItem() {
  selected = $(".cursor"); // this returns an array
  if (selected.length == 0) {
    return null;
  } else {
    return "#" + selected.first().attr("id");
  }
}

// the next four functions move the selected UI control
// this uses the array buttonOrder to know the order of the buttons. so you could change buttonOrder
// to change the order that controls are highlighted/
// if no button is currently selected, such as when the page loads, this will select the first
// item in buttonOrder (which is the 7 button)
// selectNext: go to the right, wrapping around to the next row
// selectPrevious: go to the left, wrapping around to the previous row
// selectUp: select the item above
// selectDown: select the item below

function selectNext() {
  selected = getSelectedItem();
  if (selected == null) {
    selectItem(buttonOrder[0]);
  } else {
    index = buttonOrder.indexOf(selected);
    index = (index + 1) % buttonOrder.length;
    selectItem(buttonOrder[index]);
  }
}

function selectPrevious() {
  selected = getSelectedItem();
  if (selected == null) {
    selectItem(buttonOrder[0]);
  } else {
    index = buttonOrder.indexOf(selected);
    index = index - 1;
    if (index < 0) index = buttonOrder.length + index;
    selectItem(buttonOrder[index]);
  }
}

function selectUp() {
  selected = getSelectedItem();
  if (selected == null) {
    selectItem(buttonOrder[0]);
  } else {
    index = buttonOrder.indexOf(selected);
    index = index - 4;
    if (index < 0) index = buttonOrder.length + index;
    selectItem(buttonOrder[index]);
  }
}

function selectDown() {
  selected = getSelectedItem();
  if (selected == null) {
    selectItem(buttonOrder[0]);
  } else {
    index = buttonOrder.indexOf(selected);
    index = (index + 4) % buttonOrder.length;
    selectItem(buttonOrder[index]);
  }
}

// actuate the currently selected item
// if no item is selected, this does nothing
// if multiple items are selected, this selects the first
function clickSelectedItem() {
  whichButton = getSelectedItem();
  if (whichButton != null) {
    $(whichButton).click();
  }
}

// this function responds to user key presses
// you'll rewrite this to control your interface using some number of keys
$(document).keypress(function (event) {
  if (event.key == "a") {
    alert("You pressed the 'a' key!");
  } else if (event.key == "b") {
    alert("You pressed the 'b' key!");
  }
});

/* calculator stuff below here */
// for operations, we'll save + - / *
firstValue = null;
operation = null;
addingNumber = false;

digits = "0123456789";
operators = "+-*/";

// handle calculator functions. all buttons with class calcButton will be handled here
$(".calcButton").click(function (event) {
  buttonLabel = $(this).text();

  // if it's a number, add it to our display
  if (digits.indexOf(buttonLabel) != -1) {
    // if we weren't just adding a number, clear our screen
    if (!addingNumber) {
      $("#number_input").val("");
    }
    $("#number_input").val($("#number_input").val() + buttonLabel);
    addingNumber = true;
    // if it's an operator, push the current value onto the stack
  } else if (operators.indexOf(buttonLabel) != -1) {
    // have we added a number? if so, check our stack
    if (addingNumber) {
      // is this the first number on the stack?
      // if so, save it
      if (firstValue == null) {
        firstValue = $("#number_input").val();
        addingNumber = false;
        // do we have a number on the stack already? if so, this is the same as equals
      } else if (firstValue != null) {
        secondValue = $("#number_input").val();
        evaluateExpression(firstValue, operation, secondValue);
        // in this case, keep the operation
        firstValue = $("#number_input").val();
        addingNumber = false;
      }
    }
    // either way, save this as the most recent operation
    operation = buttonLabel;
  } else if (buttonLabel == "C") {
    $("#number_input").val("");
    firstValue = null;
    operation = null;
    addingNumber = false;
  } else if (buttonLabel == "=") {
    if (firstValue != null && operation != null && addingNumber) {
      secondValue = $("#number_input").val();
      evaluateExpression(firstValue, operation, secondValue);
      // clear our state
      firstValue = null;
      operation = null;
      addingNumber = true;
    }
  }
});

// do the math for our calculator
function evaluateExpression(first, op, second) {
  output = 0;
  if (op == "+") {
    output = parseInt(first) + parseInt(second);
  } else if (op == "-") {
    output = parseInt(first) - parseInt(second);
  } else if (op == "*") {
    output = parseInt(first) * parseInt(second);
  } else if (op == "/") {
    output = parseInt(first) / parseInt(second);
  }

  // now, handle it
  $("#number_input").val(output.toString());
  // deal with state elsewhere
}

document.getElementById("tab3").addEventListener("click", function (event) {
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
    commenterInfo.innerHTML =
      "<span class='name'>Name: " +
      name +
      "</span>, <span class='email'>Email: " +
      email +
      "</span>";

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

// Arrow key navigation for calculator buttons and HTML arrow buttons
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      selectUp();
      break;
    case "ArrowDown":
      selectDown();
      break;
    case "ArrowLeft":
      selectPrevious();
      break;
    case "ArrowRight":
      selectNext();
      break;
    case "Enter":
      clickSelectedItem();
      break;
  }
});

// HTML Arrow Buttons Event Listeners
document.getElementById("upButton").addEventListener("click", function () {
  selectUp();
});

document.getElementById("downButton").addEventListener("click", function () {
  selectDown();
});

document.getElementById("leftButton").addEventListener("click", function () {
  selectPrevious();
});

document.getElementById("rightButton").addEventListener("click", function () {
  selectNext();
});

document.getElementById("selectButton").addEventListener("click", function () {
  clickSelectedItem();
});

// HTML Arrow Buttons Event Listeners
document.getElementById("leftButton3").addEventListener("click", function () {
  selectPrevious();
});

document.getElementById("rightButton3").addEventListener("click", function () {
  selectNext();
});

document.getElementById("selectButton3").addEventListener("click", function () {
  clickSelectedItem();
});

// HTML Arrow Buttons Event Listeners
document.getElementById("rightButton2").addEventListener("click", function () {
  selectNext();
});

document.getElementById("selectButton2").addEventListener("click", function () {
  clickSelectedItem();
});

var rightButton = document.getElementById("rightButton_1");
var lastMouseDownTime = 0;
var timeoutId = null;

rightButton.addEventListener("mousedown", function (event) {
  lastMouseDownTime = new Date().getTime();
  timeoutId = setTimeout(function () {
    clickSelectedItem();
    clearTimeout(timeoutId);
  }, 1000); // Adjust the duration for long press here
});

rightButton.addEventListener("mouseup", function (event) {
  clearTimeout(timeoutId);
  var currentTime = new Date().getTime();
  if (currentTime - lastMouseDownTime < 500) {
    // Short tap detected
    selectNext();
  }
});

// Arrow key navigation for single tap
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight" || event.key === ".") {
    var currentTime = new Date().getTime();
    if (currentTime - lastMouseDownTime < 500) {
      // Short tap detected
      selectNext();
    }
  }
});
