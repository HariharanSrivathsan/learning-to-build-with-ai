// Get the button element by its ID
const knowMoreBtn = document.getElementById('knowMoreBtn');

// Get the message paragraph element by its ID
const message = document.getElementById('message');

// Add a click event listener to the button
knowMoreBtn.addEventListener('click', function() {
    // Set the text content to display
    message.textContent = 'Hello AI, I am learning you more and more';

    // Toggle the 'hidden' class to show/hide the message
    // Each click will alternate between showing and hiding the text
    message.classList.toggle('hidden');
});
