// Show notification with the specified message
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.classList.add('notification', type); // Add type class (success, error, info, warning)
    notification.innerText = message;

    // Append the notification to the body
    document.body.appendChild(notification);

    // Animate notification slide-in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 0);

    // Remove notification after 3 seconds (with slide-out animation)
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-in-out forwards';
        setTimeout(() => {
            notification.remove();
        }, 500); // Wait for the slide-out animation to finish before removing
    }, 1500); // Notification stays for 3 seconds
}

// Example function for button with link
function handleButtonClick(buttonType) {
    if (buttonType === 'link') {
        // If there is a link, show green notification with subscribe message
        showNotification('JANGAN LUPA SUBSCRIBE', 'success');
    } else {
        // For non-link buttons, show "in progress" message or another message
        showNotification('SCRIPT MASIH DALAM UJI COBA', 'warning');
    }
}