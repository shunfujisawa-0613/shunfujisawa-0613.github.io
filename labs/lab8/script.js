function toggleTheme() {
    var body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}



// Select the button element
var themeToggleButton = document.getElementById('toggleButton');

// Assign the toggleTheme function to the onclick event of the button
themeToggleButton.onclick = toggleTheme;

