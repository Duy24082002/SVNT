function openTab(event, tabId) {
    // Hide all tab contents in the main tab section
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    // Remove active state from all tab buttons in the main tab section
    const tabButtons = document.querySelectorAll('.tabs .tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show the selected tab content and add active state to the button
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

function openTab1(event, tabId) {
    // Hide all tab contents in the additional info tab section
    const tabContents = document.querySelectorAll('.tab-content1');
    tabContents.forEach(content => content.style.display = 'none');

    // Remove active state from all tab buttons in the additional info tab section
    const tabButtons = document.querySelectorAll('.tabs1 .tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show the selected tab content and add active state to the button
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Set default tab to open on page load for both main and additional sections
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tabs .tab-button').click();
    document.querySelector('.tabs1 .tab-button').click();
});


// Set the date and time for the countdown (YYYY-MM-DDTHH:MM:SS format)
const countdownDate = new Date("2024-11-22T23:59:59").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds left
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    document.querySelector(".countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "Sự kiện đã bắt đầu!";
    }
}, 1000);
