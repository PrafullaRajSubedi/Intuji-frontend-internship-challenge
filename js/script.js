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

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.testimonials-grid');
    const items = Array.from(document.querySelectorAll('.testimonial-item'));
    let index = 0;

    // Clone testimonials to create a seamless loop
    grid.append(...items.map(item => item.cloneNode(true)));

    setInterval(() => {
        const itemWidth = items[0].clientWidth + 20; // width + gap
        grid.style.transition = 'transform 0.5s ease';
        grid.style.transform = `translateX(-${++index * itemWidth}px)`;

        if (index >= items.length) {
            setTimeout(() => {
                grid.style.transition = 'none';
                grid.style.transform = 'translateX(0)';
                index = 0;
            }, 500);
        }
    }, 3000);
});


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const speed = 50; 
        const increment = target / speed;

        const updateCounter = () => {
            const currentValue = parseInt(counter.innerText.replace(/,/g, ''));
            if (currentValue < target) {
                counter.innerText = Math.ceil(currentValue + increment).toLocaleString();
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCounter();
    });
});

