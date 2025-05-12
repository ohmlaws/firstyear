function checkAnswer(el, isCorrect) {
  const list = el.parentElement;
  const listItems = list.querySelectorAll("li");

  // Prevent re-selection
  if (list.dataset.answered === "true") return;
  list.dataset.answered = "true";

  listItems.forEach(li => {
    li.style.pointerEvents = "none";
    li.style.color = "#333";
    li.style.fontWeight = "normal";
  });

  el.style.color = isCorrect ? "green" : "red";
  el.style.fontWeight = "bold";

  if (!isCorrect) {
    listItems.forEach(li => {
      if (li.dataset.correct === "true") {
        li.style.color = "green";
        li.style.fontWeight = "bold";
      }
    });
  }
}
