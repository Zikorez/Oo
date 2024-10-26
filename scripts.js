
// Placeholder script to handle countdown and actions
document.querySelector('.start-btn').addEventListener('click', () => {
    alert('Mining started!');
});
document.querySelector('.copy-link').addEventListener('click', () => {
    navigator.clipboard.writeText('Your referral link').then(() => {
        alert('Link copied!');
    });
});
