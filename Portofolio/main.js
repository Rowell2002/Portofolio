// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.querySelector('.md\\:flex');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Matrix rain effect
function createMatrixRain() {
    const chars = '10';
    const rain = document.querySelector('.code-rain');
    let text = '';
    
    for(let i = 0; i < 100; i++) {
        text += chars[Math.floor(Math.random() * chars.length)];
    }
    
    rain.setAttribute('data-text', text);
}

setInterval(createMatrixRain, 100);

// Parallax effect for cyber grid
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX * 0.005);
    const moveY = (e.clientY * 0.005);
    const grid = document.querySelector('.cyber-grid');
    
    grid.style.backgroundPosition = `${moveX}px ${moveY}px`;
});

// Holographic card effect
document.querySelectorAll('.holographic').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Blob cursor effect
document.addEventListener('DOMContentLoaded', () => {
    const blob = document.getElementById('blob');
    let lastX = 0;
    let lastY = 0;
    let moveSpeed = 0.1; // Adjust for faster/slower movement

    // Smooth movement function
    const lerp = (start, end, factor) => {
        return start + (end - start) * factor;
    };

    // Animate blob position
    const animateBlob = () => {
        const mouseX = lastX;
        const mouseY = lastY;
        
        const blobX = parseFloat(blob.style.left) || window.innerWidth / 2;
        const blobY = parseFloat(blob.style.top) || window.innerHeight / 2;
        
        const newX = lerp(blobX, mouseX, moveSpeed);
        const newY = lerp(blobY, mouseY, moveSpeed);
        
        blob.style.left = `${newX}px`;
        blob.style.top = `${newY}px`;
        
        requestAnimationFrame(animateBlob);
    };

    // Track mouse movement
    window.addEventListener('mousemove', (e) => {
        lastX = e.clientX;
        lastY = e.clientY;
    });

    // Handle touch events for mobile
    window.addEventListener('touchmove', (e) => {
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
    });

    // Start animation
    animateBlob();

    // Interactive elements hover effect
    const interactiveElements = document.querySelectorAll('a, button, .social-icon');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            blob.style.transform = 'scale(0.8)';
            blob.style.background = 'linear-gradient(45deg, #3b82f6, #60a5fa)';
            blob.style.transition = 'transform 0.3s ease, background 0.3s ease';
        });

        element.addEventListener('mouseleave', () => {
            blob.style.transform = 'scale(1)';
            blob.style.background = 'linear-gradient(to right, aquamarine, rgb(59, 130, 246))';
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        blob.style.left = `${window.innerWidth / 2}px`;
        blob.style.top = `${window.innerHeight / 2}px`;
    });

    // Optional: Add magnetic effect to interactive elements
    interactiveElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = x - centerX;
            const deltaY = y - centerY;
            
            element.style.transform = `translate(${deltaX * 0.1}px, ${deltaY * 0.1}px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
});







