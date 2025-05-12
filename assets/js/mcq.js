function checkAnswer(el, isCorrect) {
  const listItems = el.parentElement.querySelectorAll("li");
  listItems.forEach(li => {
    li.style.color = "#333";
    li.style.fontWeight = "normal";
  });

  el.style.color = isCorrect ? "green" : "red";
  el.style.fontWeight = "bold";
}
