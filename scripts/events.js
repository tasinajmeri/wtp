// Add click event to the submit button

// Add mouseover event to highlight submit button on hover
function handleMouseOver() {
    // Get the submit button element
    const submitButton = document.getElementById("submit-btn");
  
    // Change background color and text color when mouse hovers over it
    submitButton.style.backgroundColor = "#4CAF50"; // Green background
    submitButton.style.color = "white"; // White text
  }
  
  // Add mouseout event to reset the button style after hover
  document.getElementById("submit-btn").addEventListener("mouseout", function() {
    // Reset the background color to default when mouse leaves
    this.style.backgroundColor = "";
    this.style.color = "";
  });
  
  // Function to highlight the field when it receives focus
  // Function to detect Tab key press and show an alert
  function detectTabKeyPress(event) {
    // Check if the pressed key is the "Tab" key
    if (event.key === "Tab") {
      alert("You pressed the Tab key!");
    }
  }
  
  // Add event listener for keydown event to detect Tab key
  document.addEventListener("keydown", detectTabKeyPress);
  
  // Function to prompt for user's name on page load
  window.onload = function() {
    prompt("Welcome! Please enter your name:");
  };