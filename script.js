document.addEventListener("DOMContentLoaded", function() {
    // Add any JavaScript functionality here
    // For example, you can add form validation, smooth scrolling, etc.
});

// script.js

// Function to open the email modal
function openEmailModal() {
    document.getElementById('emailModal').style.display = 'block';
}

// Function to close the email modal
function closeEmailModal() {
    document.getElementById('emailModal').style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
    var modal = document.getElementById('emailModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
