document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('content-locker-modal');
    const lockerContainer = document.getElementById('locker-container');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Show the content locker modal
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling

            // Paste your actual content locker script from Adblumedia here.
            // Example:
            // const adblumediaScript = document.createElement('script');
            // adblumediaScript.src = "https://adblumedia.com/locker_script.js?aid=YOUR_AFFILIATE_ID";
            // lockerContainer.appendChild(adblumediaScript);

            // Remember that the actual code must be taken from your account
            // You should paste it here instead of this comment.
        });
    });

    // To make the pop-up un-bypassable, no close button is included.
    // The user must complete an offer to close the window.
});