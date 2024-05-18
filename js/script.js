document.addEventListener('DOMContentLoaded', () => {
    const patterns = document.querySelectorAll('.hand-image');
    patterns.forEach(pattern => {
        pattern.style.transition = 'transform 1s ease-in-out';
    });

    let currentPattern = 0;

    setInterval(() => {
        patterns.forEach((pattern, index) => {
            pattern.style.transform = `translate(${index === currentPattern ? '30px, -30px' : '0, 0'})`;
        });
        currentPattern = (currentPattern + 1) % patterns.length;
    }, 3000);
});
