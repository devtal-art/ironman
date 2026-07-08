// Copy-to-Clipboard Functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
    const parentLi = btn.closest('li');
    const tooltip = parentLi.querySelector('.tooltip');
    btn.addEventListener('click', () => {
        const value = parentLi.getAttribute('data-value');
        navigator.clipboard.writeText(value).then(() => {
            tooltip.classList.add('visible');
            setTimeout(() => tooltip.classList.remove('visible'), 1200);
        });
    });
});

// Prevent scrolling on window resize
window.addEventListener('resize', () => {
    document.body.style.height = window.innerHeight + 'px';
});