document.addEventListener('DOMContentLoaded', function () {
    // Initial animations on page load
    // buy now
    anime({
        targets: '.buynow,.domain,.domainDisc',
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 1800,
        delay: anime.stagger(100),
    });
    anime({
        targets: '.domains',
        opacity: [0, 1],
        translateY: [60, 0],
        duration: 1500,
        delay: anime.stagger(100),
        easing: 'easeOutExpo'
    });    
    // navigation bar
    anime({
        targets: '.nav-item',
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: anime.stagger(100)
    });

    //hero title
    anime({
        targets: '.hero-title',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 300
    });

    anime({
        targets: '.hero-subtitle',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 600
    });

    anime({
        targets: '.hero-content .btn',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 900
    });

    anime({
        targets: '.hero-image',
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 300
    });

    // Scroll animations
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenElements.forEach((el) => observer.observe(el));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});