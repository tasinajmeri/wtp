document.addEventListener("DOMContentLoaded", function () {
    const resultField = document.getElementById("result");
  
    let expression = "";
  
    // Add event listeners to buttons
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
  
        if (button.id === "clear") {
          expression = ""; // Clear the expression
        } else if (button.id === "backspace") {
          expression = expression.slice(0, -1); // Remove last character
        } else if (button.id === "equals") {
          try {
            expression = eval(expression).toString(); // Evaluate expression
          } catch {
            expression = "Error"; // Handle invalid expressions
          }
        } else if (value) {
          expression += value; // Append number/operator to expression
        }
  
        resultField.value = expression; // Update display
      });
    });
  });
  