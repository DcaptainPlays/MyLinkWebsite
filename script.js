// Counter variable
let count = 0;

// Function to show message
function showMessage() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
    
    // Optional: Hide after 3 seconds
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 3000);
}

// Function to increase count
function increaseCount() {
    count++;
    updateCountDisplay();
}

// Function to decrease count
function decreaseCount() {
    count--;
    updateCountDisplay();
}

// Function to reset count
function resetCount() {
    count = 0;
    updateCountDisplay();
}

// Function to update count display
function updateCountDisplay() {
    document.getElementById('count').textContent = count;
}

// Add console message when page loads
console.log('🎉 JavaScript loaded successfully!');
console.log('All three files are working together!');

// Optional: Add a welcome alert (you can remove this)
window.addEventListener('load', () => {
    console.log('✅ Website fully loaded!');
});