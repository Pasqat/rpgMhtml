//DOM Elements

const switchTheme = document.getElementById('switchTheme');
const themeText = switchTheme.getElementsByClassName('link-text')[0];
const themeIcon = switchTheme.getElementsByClassName('fas')[0];
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}

//Button event Handlers
switchTheme.onclick = () => {
    console.log(themeIcon)
    if (themeIcon.classList[1] === 'fa-sun') {
        body.classList.replace('dark', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeText.textContent = 'Dark mode';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light', 'dark');
        themeText.textContent = 'Light mode';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }

}