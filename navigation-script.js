function clearScroll() {
  var scroll = document.getElementById("scroll-details");
  scroll.innerHTML = "";
}

function updateScroll(item) {
  var scroll_details = document.getElementById("scroll-details");
  var scroll_detail = document.createElement("li");
  scroll_detail.appendChild(document.createTextNode(item));
  scroll_details.appendChild(scroll_detail);
}

function updateHover(buttonID) {
  var buttons = document.getElementsByTagName("button");
  for (i = 0; i < buttons.length; i++) {
    var currentButtonID = "week" + (i + 1);
    document.getElementById(currentButtonID).className = "hoverable";
  }
  var button = document.getElementById(buttonID);
  button.className = "";
}

function updateScrollWk1() {
  var content = ["Introduction to HTML", "week1"];
  document.getElementById("scroll-header").innerHTML = "Week 1";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk2() {
  var content = [
    "Semantics",
    "Introduction to CSS",
    "HTML Achievement Unlocked",
    "week2",
  ];
  document.getElementById("scroll-header").innerHTML = "Week 2";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk3() {
  var content = ["Forms", "Advance CSS Layouts", "week3"];
  document.getElementById("scroll-header").innerHTML = "Week 3";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk4() {
  var content = [
    "Responsive Images",
    "Spilt UI",
    "CSS Achievement Unlocked",
    "week4",
  ];
  document.getElementById("scroll-header").innerHTML = "Week 4";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk5() {
  var content = ["Introduction to Javascript", "week5"];
  document.getElementById("scroll-header").innerHTML = "Week 5";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk6() {
  var content = ["More Javascript", "Objects", "DOM", "week6"];
  document.getElementById("scroll-header").innerHTML = "Week 6";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk7() {
  var content = [
    "DOM",
    "Events",
    "Local Storage",
    "JavaScript Achievement Unlocked",
    "week7",
  ];
  document.getElementById("scroll-header").innerHTML = "Week 7";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk8() {
  var content = [
    "Fetch",
    "Bootstrap",
    "Bootstrap Achivement Unlocked",
    "week8",
  ];
  document.getElementById("scroll-header").innerHTML = "Week 8";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk9() {
  var content = ["Common Test Week", "week9"];
  document.getElementById("scroll-header").innerHTML = "Week 9";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk10() {
  var content = ["Mid-Semester Break", "week10"];
  document.getElementById("scroll-header").innerHTML = "Week 10";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk11() {
  var content = ["Mid-Semester Break", "week11"];
  document.getElementById("scroll-header").innerHTML = "Week 11";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk12() {
  var content = ["Rest DB", "Rest DB Achievement Unlocked", "week12"];
  document.getElementById("scroll-header").innerHTML = "Week 12";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk13() {
  var content = ["Best Practices", "Common Mistakes", "week13"];
  document.getElementById("scroll-header").innerHTML = "Week 13";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

function updateScrollWk14() {
  var content = ["Lottie Animation", "Lottie Animation Unlocked", "week14"];
  document.getElementById("scroll-header").innerHTML = "Week 14";
  clearScroll();
  for (i = 0; i < content.length - 1; i++) {
    updateScroll(content[i]);
  }
  updateHover(content[content.length - 1]);
}

clearScroll();
updateScrollWk1();
