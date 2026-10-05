/* =========================================
   DARK / LIGHT MODE
========================================= */


// Get the theme button
const themeToggle =
    document.getElementById("themeToggle");


// Add click event
themeToggle.addEventListener("click", function () {

    // Add or remove dark-mode class
    document.body.classList.toggle("dark-mode");


    // Check current mode
    if (
        document.body.classList.contains("dark-mode")
    ) {

        // Dark mode
        themeToggle.textContent =
            "☀️ Light Mode";

    } else {

        // Light mode
        themeToggle.textContent =
            "🌙 Dark Mode";
    }

});



/* =========================================
   QUIZ FUNCTIONALITY
========================================= */


// Get buttons and result area
const submitQuiz =
    document.getElementById("submitQuiz");

const resetQuiz =
    document.getElementById("resetQuiz");

const quizResult =
    document.getElementById("quizResult");


// Submit Quiz
submitQuiz.addEventListener("click", function () {

    // Start score from zero
    let score = 0;


    // Total questions
    const totalQuestions = 5;


    // Check every question
    for (
        let i = 1;
        i <= totalQuestions;
        i++
    ) {

        // Find selected answer
        const selectedAnswer =
            document.querySelector(
                'input[name="q' + i + '"]:checked'
            );


        // If an answer was selected
        if (selectedAnswer) {

            // Add its value
            score += Number(
                selectedAnswer.value
            );
        }
    }


    // Calculate percentage
    const percentage =
        (score / totalQuestions) * 100;


    // Display result
    quizResult.style.display = "block";


    // Remove old result classes
    quizResult.classList.remove(
        "result-success",
        "result-average",
        "result-low"
    );


    // Different messages according to score
    if (score === 5) {

        quizResult.classList.add(
            "result-success"
        );

        quizResult.textContent =
            "🎉 Excellent! Your Score: 5 / 5";

    }

    else if (score >= 3) {

        quizResult.classList.add(
            "result-average"
        );

        quizResult.textContent =
            "👍 Good Job! Your Score: " +
            score +
            " / 5";

    }

    else {

        quizResult.classList.add(
            "result-low"
        );

        quizResult.textContent =
            "📚 Keep Practicing! Your Score: " +
            score +
            " / 5";
    }


    // Scroll to result
    quizResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});



/* =========================================
   RESET QUIZ
========================================= */


resetQuiz.addEventListener("click", function () {

    // Get all radio buttons
    const allAnswers =
        document.querySelectorAll(
            'input[type="radio"]'
        );


    // Uncheck every answer
    allAnswers.forEach(function (answer) {

        answer.checked = false;

    });


    // Hide result
    quizResult.style.display = "none";


    // Remove result classes
    quizResult.classList.remove(
        "result-success",
        "result-average",
        "result-low"
    );


    // Remove result text
    quizResult.textContent = "";

});
