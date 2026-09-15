// Dark Mode Toggle with localStorage persistence
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use system preference
    const getCurrentTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        // Check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
    
    const setTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.classList.remove('light-theme');
            themeToggle.innerHTML = '☀️'; // Sun icon for light mode
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.add('light-theme');
            themeToggle.innerHTML = '🌙'; // Moon icon for dark mode
            localStorage.setItem('theme', 'light');
        }
    };
    
    // Initialize theme
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const isDark = !htmlElement.classList.contains('light-theme');
        setTheme(isDark ? 'light' : 'dark');
        
        // Add subtle animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 500);
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            // Only change if user hasn't explicitly set a preference
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
    
    // Add hover effect to theme toggle
    themeToggle.addEventListener('mouseenter', function() {
        themeToggle.style.transform = 'scale(1.1)';
    });
    
    themeToggle.addEventListener('mouseleave', function() {
        themeToggle.style.transform = 'scale(1)';
    });
});