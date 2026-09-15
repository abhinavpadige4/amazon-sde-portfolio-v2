// Timeline Animation
document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Remove observer once animated
                timelineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Initially set items to be animated
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        
        // Observe for animation
        timelineObserver.observe(item);
    });
    
    // Add hover effect to timeline icons
    const timelineIcons = document.querySelectorAll('.timeline-icon');
    timelineIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-50%) scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(-50%) scale(1)';
        });
    });
    
    // Add pulse animation to timeline line on load
    const timelineLine = document.querySelector('.timeline::before');
    // Note: Can't directly animate pseudo-element, so we'll add a visual indicator
    
    // Create animated dots on timeline
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        // Add pulsing effect to existing timeline items
        timelineItems.forEach(item => {
            const icon = item.querySelector('.timeline-icon');
            if (icon) {
                icon.style.animation = 'pulse 2s infinite';
                icon.style.animationDelay = `${Math.random() * 2}s`;
            }
        });
    }
});