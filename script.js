// Navigation Functions
function goToAddons() {
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('addonsPage').classList.add('active');
    window.scrollTo(0, 0);
}

function goToHome() {
    document.getElementById('addonsPage').classList.remove('active');
    document.getElementById('homePage').classList.add('active');
    window.scrollTo(0, 0);
}

// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    console.log(' DcaptainPlays Website Loaded!');
    console.log('Welcome to the addon showcase!');
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe addon cards for animation
    const addonCards = document.querySelectorAll('.addon-card');
    addonCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press Escape to go back
    if (e.key === 'Escape') {
        const addonsPage = document.getElementById('addonsPage');
        if (addonsPage.classList.contains('active')) {
            goToHome();
        }
    }
});

// Add particle effect on mouse move
document.addEventListener('mousemove', function(e) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '5px';
    particle.style.height = '5px';
    particle.style.background = 'rgba(102, 126, 234, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.zIndex = '999';
    particle.style.animation = 'particleFade 1s ease-out forwards';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1000);
});

// Add particle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-50px);
        }
    }
`;
document.head.appendChild(style);