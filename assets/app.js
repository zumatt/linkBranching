const themeButton = document.getElementById("theme-button");
const themeIcon = document.getElementById("theme-icon");
const linkList = document.querySelector(".link-list");

let theme = localStorage.getItem("theme");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = "dark";
} else {
    theme = "light";
}

if (theme === null) {
    theme = "dark";
    console.log("The theme was null...");
}

setTheme(theme);

themeButton.addEventListener("click", () => {
    if (theme === "dark") {
        theme = "light";
    } else {
        theme = "dark";
    }
    setTheme(theme);
    localStorage.setItem("theme", theme);
});

function setTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        themeIcon.src = "assets/sun.svg";
        themeIcon.alt = "Light theme icon";
        document.documentElement.style.setProperty('--zuColor', '#ffffff');
    } else {
        document.body.classList.remove("dark");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        themeIcon.src = "assets/moon.svg";
        themeIcon.alt = "Dark theme icon";
        document.documentElement.style.setProperty('--zuColor', '#000000');
    }
}
