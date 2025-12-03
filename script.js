// Get the button element by its ID
const knowMoreBtn = document.getElementById('knowMoreBtn');

// Get the message paragraph element by its ID
const message = document.getElementById('message');

// Add a click event listener to the button
knowMoreBtn.addEventListener('click', function() {
    // Set the text content to display
    message.textContent = 'Hello AI, I am learning you more and more';

    // Remove the 'hidden' class to make the message visible
    // The CSS animation will handle the smooth appearance
    message.classList.remove('hidden');
});
