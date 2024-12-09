// Links for redirection
const discordLink = "https://discord.gg/9nsMzd2wut";
const facebookLink = "https://www.facebook.com/profile.php?id=61568727934276";

// Predefined valid commands
const correctDiscordCode = "main_: getch <join> js <milio>.print (Quantum Quill)2_4%d";
const correctFacebookCode = "<js>/json if *& <open> (mellow)";

// Get the input field and output area
const inputField = document.getElementById("userInput");
const output = document.getElementById("output");

// Function to simulate typing effect in terminal
function typeWriter(text, element, callback) {
    let i = 0;
    const speed = 50; // speed of typing
    function typingEffect() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typingEffect, speed);
        } else {
            callback(); // Once typing is finished, call the callback (for any actions like the cursor blink)
        }
    }
    typingEffect();
}

// Function to handle user input and process commands
function handleInput(event) {
    const command = inputField.value.trim();  // Get the typed command
    if (event.key === "Enter") {
        // Display the command in the terminal-style format
        output.innerHTML += `<p><span style="color: #0f0;">[user@quantumquill ~]$ </span>`;
        
        // Simulate typing the command in terminal
        typeWriter(command, output, () => {
            // After typing, check for command validity
            if (command === correctDiscordCode) {
                output.innerHTML += "<p><span style='color: #0f0;'>Redirecting to Discord...</span></p>";
                setTimeout(() => {
                    window.open(discordLink, "_blank");
                }, 1000);
            } else if (command === correctFacebookCode) {
                output.innerHTML += "<p><span style='color: #0f0;'>Redirecting to Facebook...</span></p>";
                setTimeout(() => {
                    window.open(facebookLink, "_blank");
                }, 1000);
            } else {
                output.innerHTML += "<p><span style='color: #f00;'>Invalid command. Please try again.</span></p>";
            }

            // Clear the input field for the next command
            inputField.value = "";
            output.scrollTop = output.scrollHeight; // Scroll to the bottom
        });

        // Prepare for the next command input
        inputField.value = "";
    }
}

// Attach event listener to handle the input
inputField.addEventListener("keydown", handleInput);
inputField.focus(); // Auto-focus the input field for typing