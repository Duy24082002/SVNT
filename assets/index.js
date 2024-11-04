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
