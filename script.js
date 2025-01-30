// List of 30 possible answers with unique colors
const answers = [
    { text: "It is certain.", color: "#2ecc71" }, // Green
    { text: "It is decidedly so.", color: "#3498db" }, // Blue
    { text: "Without a doubt.", color: "#f1c40f" }, // Yellow
    { text: "Yes - definitely.", color: "#e67e22" }, // Orange
    { text: "You may rely on it.", color: "#1abc9c" }, // Turquoise
    { text: "As I see it, yes.", color: "#9b59b6" }, // Purple
    { text: "Most likely.", color: "#e74c3c" }, // Red
    { text: "Outlook good.", color: "#27ae60" }, // Dark Green
    { text: "Yes.", color: "#d35400" }, // Dark Orange
    { text: "Signs point to yes.", color: "#2980b9" }, // Dark Blue
    { text: "Reply hazy, try again.", color: "#bdc3c7" }, // Light Gray
    { text: "Ask again later.", color: "#7f8c8d" }, // Gray
    { text: "Better not tell you now.", color: "#34495e" }, // Dark Gray
    { text: "Cannot predict now.", color: "#8e44ad" }, // Violet
    { text: "Concentrate and ask again.", color: "#c0392b" }, // Dark Red
    { text: "Don't count on it.", color: "#ecf0f1" }, // White
    { text: "My reply is no.", color: "#16a085" }, // Teal
    { text: "My sources say no.", color: "#2c3e50" }, // Navy Blue
    { text: "Outlook not so good.", color: "#d35400" }, // Dark Orange
    { text: "Very doubtful.", color: "#f39c12" }, // Gold
    { text: "Absolutely not.", color: "#e74c3c" }, // Red
    { text: "Unlikely.", color: "#2ecc71" }, // Green
    { text: "Not in your favor.", color: "#3498db" }, // Blue
    { text: "Chances are slim.", color: "#f1c40f" }, // Yellow
    { text: "I wouldn't bet on it.", color: "#e67e22" }, // Orange
    { text: "Highly improbable.", color: "#1abc9c" }, // Turquoise
    { text: "Forget about it.", color: "#9b59b6" }, // Purple
    { text: "No way.", color: "#e74c3c" }, // Red
    { text: "Not happening.", color: "#27ae60" }, // Dark Green
    { text: "Never.", color: "#d35400" } // Dark Orange
];

// Function to get a random answer and update the background color
function getAnswer() {
    const questionInput = document.getElementById("questionInput").value;

    // Check if the user has entered a question
    if (!questionInput.trim()) {
        alert("Please enter a question!");
        return;
    }

    // Get a random answer from the list
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];

    // Display the answer inside the 8-ball
    const answerDisplay = document.getElementById("answerDisplay");
    answerDisplay.textContent = randomAnswer.text;

    // Add a class to reduce the font size for answers
    answerDisplay.classList.add("answer-text");

    // Update the background color based on the answer's color
    document.body.style.backgroundColor = randomAnswer.color;

    
}
// Add Event Listener for the Enter Key
document.getElementById("questionInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if the Enter key was pressed
        getAnswer(); // Call the getAnswer function
    }
});