// Selecting DOM elements using getElementById
const inputField = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const chatBox = document.getElementById("chatBox");

// Array to store chat messages
let messages = [];
let responses = ["Hii", "I am fine", "Tell me more about you", "Doing great", "Nice!", "Let's meet someday", "Okay, we will meet"];
let responseIndex = 0; // Track response position

// Function to send a message
function sendMessage() {
    let messageText = inputField.value.trim();
    if (messageText === "") return; // Prevent empty messages

    // Add sender's message to the array
    messages.push({ sender: "dhruv", text: messageText });

    // Simulated auto-reply from Aman using array index
    if (responseIndex >= responses.length) {
        responseIndex = 0; // Reset index when it reaches the end
    }
    messages.push({ sender: "Aman", text: responses[responseIndex] });
    responseIndex++; // Move to next response for the next interaction

    // Update chat display
    updateChat();

    // Clear input field
    inputField.value = "";
}

// Function to update the chat box
function updateChat() {
    chatBox.innerHTML = ""; // Clear chat box

    messages.forEach(msg => {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message");

        if (msg.sender === "dhruv") {
            messageDiv.classList.add("sender");
        } else {
            messageDiv.classList.add("receiver");
        }

        messageDiv.textContent = `${msg.sender}: ${msg.text}`;
        chatBox.appendChild(messageDiv);
    });

    // Auto-scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Attach send function to button
sendButton.addEventListener("click", sendMessage);

// Allow sending messages using Enter key
inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
