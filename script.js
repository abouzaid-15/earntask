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
            // Remember that the actual code must be taken from your account.
        });
    });

    // To make the pop-up un-bypassable, no close button is included.
    // The user must complete an offer to close the window.
});
