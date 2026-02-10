function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

/* Scroll animation */
.section {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}

.section.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ===== Scroll Animations ===== */
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
