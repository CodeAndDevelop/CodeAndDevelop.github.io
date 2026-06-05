// Theme toggle functionality
const themeToggle = document.querySelector('#light_dark');
const htmlElement = document.documentElement;

// Initialize theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

// Set theme
function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark-mode');
        themeToggle.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.remove('dark-mode');
        themeToggle.textContent = 'Light';
        localStorage.setItem('theme', 'light');
    }
}

// Toggle between light and dark mode
themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Initialize theme when page loads
initializeTheme();






