function playerChoice(choice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById("computer-choice").textContent = computerChoice;
  
    const resultText = document.getElementById("result-text");
    if (choice === computerChoice) {
      resultText.textContent = "It's a tie!";
      resultText.className = ""; // Remove any previous classes
    } else if (
      (choice === "rock" && computerChoice === "scissors") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissors" && computerChoice === "paper")
    ) {
      resultText.textContent = "You win!";
      resultText.className = "result-win"; // Apply the win class
    } else {
      resultText.textContent = "Computer wins!";
      resultText.className = "result-lose"; // Apply the lose class
    }
  }
  