function checkAnswer(el, isCorrect) {
  // Prevent re-selection after the first click
  if (el.parentElement.dataset.answered === "true") return;
  el.parentElement.dataset.answered = "true";  // Mark the question as answered
  
  const listItems = el.parentElement.querySelectorAll("li");
  
  // Reset all list items to default style
  listItems.forEach(li => {
    li.style.color = "#333"; // Default color
    li.style.fontWeight = "normal";
    li.style.pointerEvents = "none";  // Disable further clicks on options
  });

  // Style the clicked answer
  el.style.color = isCorrect ? "green" : "red";
  el.style.fontWeight = "bold";

  // If wrong answer, highlight only the correct one
  if (!isCorrect) {
    listItems.forEach(li => {
      if (li !== el && li.style.color !== "red" && li.onclick && li.dataset.correct === "true") {
        li.style.color = "green";
        li.style.fontWeight = "bold";
      }
    });
  }
}
