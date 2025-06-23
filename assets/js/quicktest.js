function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Declare globally
let score = 0;
let maxScore = 0;
let totalQuestions = 0;
let setScores = {};

document.getElementById('start-btn').onclick = function () {
  const userName = document.getElementById('username').value.trim();
  if (!userName) {
    alert('Please enter your name before starting the test.');
    return;
  }
  document.getElementById('user-info').style.display = 'none';
  document.getElementById('instructions').style.display = 'none';
  document.getElementById('floating-score').style.display = 'block';
  document.getElementById('submit-btn').style.display = 'block';
  document.getElementById('timer').style.display = 'block';
  startQuiz(userName);
};

function prepareOptions(optionsArray) {
  const specials = optionsArray.filter(opt =>
    /^((All|None)\s+(of\s+(the\s+)?)?above|None\s+of\s+these)$/i.test(opt)
  );
  const normalOpts = optionsArray.filter(opt => !specials.includes(opt));
  return [...shuffle(normalOpts), ...specials];
}

function styleCardForCapture() {
  const card = document.querySelector('#card');
  const savedStyles = {
    originalBg: card.style.backgroundColor,
    originalColor: card.style.color
  };
  card.style.backgroundColor = '#ffffff';
  card.style.color = '#000000';
  card.querySelectorAll('h1,h2,h3,h4,p,span,div,li').forEach(el => {
    el.style.color = '#000000';
  });
  return savedStyles;
}

function resetCardStyle(state) {
  const card = document.querySelector('#card');
  card.style.backgroundColor = state.originalBg;
  card.style.color = state.originalColor;
  card.querySelectorAll('h1,h2,h3,h4,p,span,div,li').forEach(el => {
    el.style.color = '';
  });
}

function startQuiz(userName) {
  score = 0;
  let answeredCount = 0;
  totalQuestions = Object.values(quizSets).reduce((acc, set) => acc + set.length, 0);
  maxScore = totalQuestions * 2;
  setScores = {};

  document.getElementById('floating-score').textContent = `Answered: 0 / ${totalQuestions}`;

  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';
  let questionIndex = 0;

  // Setup timer
  let totalTime = 60 * 60;
  const timerDisplay = document.getElementById('timer');
  const timerInterval = setInterval(() => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    timerDisplay.textContent = `Time Left: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (--totalTime < 0) {
      clearInterval(timerInterval);
      autoSubmit(userName);
    }
  }, 1000);

  Object.entries(quizSets).forEach(([setName, questions]) => {
    setScores[setName] = 0;

    const setDiv = document.createElement('div');
    setDiv.classList.add('quiz-set');

    const title = document.createElement('h2');
    title.textContent = setName;
    setDiv.appendChild(title);

    shuffle(questions).forEach((q) => {
      const index = questionIndex++;
      const qDiv = document.createElement('div');
      qDiv.classList.add('question');

      const qText = document.createElement('p');
      qText.innerHTML = `<strong>Q${index + 1}:</strong> ${q.question}`;
      qDiv.appendChild(qText);

      if (q.image) {
        const img = document.createElement('img');
        img.src = q.image;
        img.alt = 'question image';
        img.style.maxWidth = '100%';
        img.style.margin = '10px 0';
        qDiv.appendChild(img);
      }

      const optionsDiv = document.createElement('div');
      optionsDiv.classList.add('options');

      prepareOptions(q.options).forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;

        btn.onclick = function () {
          if (qDiv.dataset.answered) return;
          qDiv.dataset.answered = 'true';
          answeredCount++;

          optionsDiv.querySelectorAll('button').forEach(b => b.disabled = true);

          if (opt === q.answer) {
            btn.classList.add('correct');
            score += 2;
            setScores[setName] += 2;
          } else {
            btn.classList.add('wrong');
            Array.from(optionsDiv.children).forEach(b => {
              if (b.textContent === q.answer) b.classList.add('correct');
            });
          }

          document.getElementById('floating-score').textContent = `Answered: ${answeredCount} / ${totalQuestions}`;
        };
        optionsDiv.appendChild(btn);
      });

      qDiv.appendChild(optionsDiv);
      setDiv.appendChild(qDiv);
    });

    quizContainer.appendChild(setDiv);
  });

  document.getElementById('submit-btn').onclick = function () {
    clearInterval(timerInterval);
    showResult(userName, score, maxScore);
    document.querySelectorAll('.options button').forEach(btn => btn.disabled = true);
  };

  document.getElementById('download-img').onclick = function () {
    const savedStyles = styleCardForCapture();
    html2canvas(document.querySelector('#card')).then(canvas => {
      resetCardStyle(savedStyles);
      const link = document.createElement('a');
      link.download = 'quiz-result.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  document.getElementById('share-img').onclick = function () {
    const savedStyles = styleCardForCapture();
    html2canvas(document.querySelector('#card')).then(canvas => {
      resetCardStyle(savedStyles);
      canvas.toBlob(blob => {
        const file = new File([blob], 'quiz-result.png', { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator.share({ files: [file], title: 'My Quiz Score' });
        } else {
          alert('Sharing not supported on this browser/device.');
        }
      });
    });
  };
}

function autoSubmit(userName) {
  document.getElementById('submit-btn').disabled = true;
  document.querySelectorAll('.options button').forEach(btn => btn.disabled = true);
  showResult(userName, score, maxScore, true);
}

function showResult(userName, score, maxScore, timedOut = false) {
  document.getElementById('user-name-display').textContent = timedOut
    ? `${userName}, here is your score.`
    : `${userName}, here is your score!`;

  document.getElementById('circle-score').textContent = `${score} / ${maxScore}`;

  const percentage = ((score / maxScore) * 100).toFixed(2);
  document.getElementById('percentage-score').textContent = `Percentage: ${percentage}%`;

  const setScoresDiv = document.getElementById('set-scores');
  setScoresDiv.innerHTML = '<h4>Score Breakdown:</h4>';

  Object.entries(quizSets).forEach(([setName, questions]) => {
    const fullPoints = questions.length * 2;
    const setPoints = setScores[setName] || 0;
    const p = document.createElement('p');
    p.textContent = `${setName}: ${setPoints} / ${fullPoints}`;
    setScoresDiv.appendChild(p);
  });

  document.getElementById('result-card').style.display = 'block';
  document.getElementById('result-card').scrollIntoView({ behavior: 'smooth' });
}
