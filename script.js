function submitExam() {
    // Define the correct answers
    const correctAnswersEnglish = {
        "english-q1": "b",
        "english-q2": "b",
        "english-q3": "c",
        "english-q4": "a",
        "english-q5": "c",
        "english-q6": "a",
        "english-q7": "b",
        "english-q8": "c",
        "english-q9": "a",
        "english-q10": "a"

    };
    const correctAnswersMath = {
        "math-q1": 12,
        "math-q2": 8,
         "math-q3": 15,
        "math-q4": 12,
          "math-q5": 5,
        "math-q6": 7,
        "math-q7": 3,
        "math-q8": 5,
        "math-q9": 20,
        "math-q10": 22,
        "math-q11": 465,
        "math-q12": 210,
        "math-q13": 120,
        "math-q14": 180,
        "math-q15": 24,
        "math-q16": 8,
        "math-q17": 0,
        "math-q18": 3,
        "math-q19": 2,
        "math-q20": 5,
        "math-q21": 10,
        "math-q22": 9,
        "math-q23": 6,
        "math-q24": 20,
        "math-q25": 8

    };

    // Get user answers
    const englishAnswers = document.querySelectorAll('#english-form input[type="radio"]:checked');
    const mathAnswers = document.querySelectorAll('#math-form input[type="number"]');

    let score = 0;

    // Check English answers
    englishAnswers.forEach(answer => {
        if (correctAnswersEnglish[answer.name] === answer.value) {
            score += 1;
        }
    });

    // Check Math answers
    mathAnswers.forEach((input, index) => {
        if (parseInt(input.value, 10) === correctAnswersMath[`math-q${index + 1}`]) {
            score += 1;
        }
    });

    // Display results
    const totalQuestions = Object.keys(correctAnswersEnglish).length + Object.keys(correctAnswersMath).length;
    const resultText = `You scored ${score} out of ${totalQuestions}.`;
    document.getElementById('results').innerText = resultText;
}
