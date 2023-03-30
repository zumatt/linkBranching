# Personal Link Redirect
My personal link tree for my instagram page

As part of a bigger project that I'm currrently developing [ [find here more info](https://github.com/zumatt/personalWebsite) ] I wanted to start from a easier website in order to discover more whow to use the [ChatGPT](https://openai.com/blog/chatgpt) tool in order to create a website.

## First iteration
*Me:*
> Create the code for a mobile first webpage using HTML, CSS and JavaScript if needed.
The website should have a black background, and white text. But as soon as the sun icon in the header will be pressed the background need to change from black to white and the text from white to black; the icon need also to change into a moon, that as soon as it is pressed will change the background in black and text in white.
The website need to has an header where at the left there's a text "ZUMAT" and at the right the sun/moon icon that will change colours; at the bottom of the header a horizontal white line divide the rest of the page.
In the body of the webpage there is a list of links arranged in one columns and potentially infinite rows and divided at the bottom by an horizontal white line; each link need to have a title and nothing else. As soon as the user press the row it need to be redirect to the link.
As a footer write a text "co-created with chatPGT" inserting a link to your webpage and below a mailto: link to "hi@zumat.it".
Use as a font 'NeueMachina-Inktrap'.

*ChatGPT:*
> Here's a mobile-first webpage that meets your requirements:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZUMAT</title>
    <link href="https://fonts.googleapis.com/css?family=NeueMachina-Inktrap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="header-content">
            <div class="logo">
                <h1>ZUMAT</h1>
            </div>
            <div class="theme-toggle">
                <button id="theme-button">
                    <img id="theme-icon" src="sun.svg" alt="sun icon">
                </button>
            </div>
        </div>
        <hr>
    </header>
    <main>
        <div class="link-list">
            <a href="https://example.com"><h2>Example link</h2></a>
            <a href="https://example.com"><h2>Example link</h2></a>
            <a href="https://example.com"><h2>Example link</h2></a>
            <a href="https://example.com"><h2>Example link</h2></a>
            <a href="https://example.com"><h2>Example link</h2></a>
            <a href="https://example.com"><h2>Example link</h2></a>
            <a href="https://example.com"><h2>Example link</h2></a>
        </div>
        <hr>
    </main>
    <footer>
        <div class="footer-content">
            <p>co-created with <a href="https://example.com">chatPGT</a></p>
            <p><a href="mailto:hi@zumat.it">hi@zumat.it</a></p>
        </div>
    </footer>
    <script src="app.js"></script>
</body>
</html>

```
> CSS
```
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: "NeueMachina-Inktrap", sans-serif;
    font-size: 16px;
    color: white;
    background-color: black;
}

header {
    display: flex;
    flex-direction: column;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

.logo {
    font-size: 28px;
}

.theme-toggle {
    margin-right: 8px;
}

#theme-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

#theme-icon {
    width: 24px;
    height: 24px;
}

#theme-icon[src="sun.svg"] {
    filter: invert(1);
}

hr {
    height: 1px;
    background-color: white;
    border: none;
    margin: 0;
}

main {
    padding: 16px;
}

.link-list {
    display: flex;
    flex-direction: column;
}

.link-list a {
    text-decoration: none;
    color: inherit;
}

.link-list a:hover {
    text-decoration: underline;
}

h2 {
    margin: 8px 0;
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
}

.footer-content {
    text-align: center;
}

.footer-content a {
    color: white;
}

#theme-icon[src="moon.svg"] {
    filter: invert(1);
}

@media screen and (min-width: 768px) {
    .header-content {
        max-width: 768px;
        margin: 0 auto;
    }
    .link-list {
        flex-direction: row;
        flex-wrap: wrap;
    }
    h2 {
        margin: 8px;
    }
}
```
>CSS Explanation:
*: selects all elements on the page and applies the following styles to them.
box-sizing: sets the sizing method to include padding and borders within the element's dimensions.
margin and padding: sets the margin and padding to 0 for all elements on the page.
font-family: sets the font family to NeueMachina-Inktrap for all text on the page.
font-size: sets the default font size to 16 pixels.
color and background-color: sets the default text color to white and the default background color to black.
header: sets the display of the header to flex and the flex-direction to column.
.header-content: sets the display of the header content to flex, justifies the content between the logo and the theme toggle, aligns the items at the center, and adds padding to the header.
.logo: sets the font size of the logo to 28 pixels.
.theme-toggle: adds a right margin of 8 pixels to the theme toggle button.
#theme-button: sets the background color to transparent, removes the border, and sets the cursor to pointer.
#theme-icon: sets the width and height of the icon to 24 pixels.
#theme-icon[src="sun.svg"]: applies an invert filter to the sun icon when it is displayed on a black background.
hr: sets the height to 1 pixel, the background color to white, removes the border, and sets the margin to 0 for all horizontal rules on the page.
main: adds padding

*Me:*
>write the code for app.js that is missing

*ChatGPT:*
>Certainly! Here's the code for the app.js file:
```
const themeButton = document.getElementById("theme-button");
const themeIcon = document.getElementById("theme-icon");
const linkList = document.querySelector(".link-list");

let theme = localStorage.getItem("theme");

if (theme === null) {
    theme = "dark";
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
        themeIcon.src = "sun.svg";
        themeIcon.alt = "Light theme icon";
    } else {
        document.body.classList.remove("dark");
        themeIcon.src = "moon.svg";
        themeIcon.alt = "Dark theme icon";
    }
}

linkList.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        event.preventDefault();
        window.location.href = event.target.href;
    }
});

```
>JS Explanation:
const: declares two constants, themeButton and themeIcon, which are assigned to the theme button and icon elements in the HTML.
let: declares a variable, theme, which is assigned the value of the "theme" item in local storage, or "dark" if there is no "theme" item in local storage.
setTheme: defines a function that takes a theme argument and sets the theme of the page based on the value of the argument. If theme is "dark", it adds the "dark" class to the body element, sets the src attribute of the themeIcon element to "sun.svg", and sets the alt attribute of the themeIcon element to "Light theme icon". If theme is "light", it removes the "dark" class from the body element, sets the src attribute of the themeIcon element to "moon.svg", and sets the alt attribute of the themeIcon element to "Dark theme icon".
themeButton.addEventListener: listens for a click event on the theme button and toggles the theme of the page and the theme variable between "dark" and "light" using an if statement. It then calls the setTheme function with the new theme value and stores the theme value in local storage using localStorage.setItem.
linkList.addEventListener: listens for a click event on the link list and prevents the default behavior of clicking on a link, instead redirecting the user to the href attribute of the clicked link using window.location.href.

## Furthermore trials

From here I tried different other commands in order to refine the provided code, but the AI disn't help me a lot.
So I preferred to go by myself and fix the code in order to get the desired result.

## Next steps

I would like to try to implement [Matomo](https://matomo.org/) to see the analytics from the page.
The second step will be the research engines optimization.

## SEO
*Me:*
>Can you conduct a keyword research for my interaction design projects page? The webpage is a collection of links to the projects I'm doing and my personal portfolio.

*ChatGPT:*
>Sure, I can conduct a keyword research for your interaction design projects page. Here are some potential keywords to consider:
Interaction design projects
User interface design portfolio
UX design projects
Web design portfolio
Graphic design portfolio
Digital product design projects
Mobile app design portfolio
Creative design projects
Visual design portfolio
Front-end development projects
These keywords are focused on design, portfolio, and specific areas of design such as UI/UX design and web/mobile app design. It's important to note that keyword research is only one aspect of SEO, and it's important to also consider the relevance of the keywords to your content and the competition for those keywords.
When using these keywords, make sure to incorporate them naturally into your content and avoid keyword stuffing, which can result in a penalty. Additionally, consider building high-quality backlinks to your page from other relevant websites to increase its authority and improve its ranking in search engine results pages.

*Me:*
>Can you create the seo integration for an html page with these keywords?
Interaction design projects
User interface design portfolio
UX design projects
Digital product design projects
Mobile app design portfolio
Creative design projects
Front-end development projects
Tangible Interafaces projects
Innovative product projects

*ChatGPT:*
>Sure, here is an example of how you could integrate those keywords into the HTML code of a webpage:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Design Projects</title>
    <meta name="description" content="Explore my portfolio of interaction design projects, user interface design, UX design, digital product design, mobile app design, creative design, and front-end development projects.">
    <meta name="keywords" content="interaction design projects, user interface design portfolio, UX design projects, digital product design projects, mobile app design portfolio, creative design projects, front-end development projects, tangible interfaces projects, innovative product projects">
</head>
<body>
    <h1>My Design Projects</h1>
    <p>Here you can find a collection of my interaction design projects, user interface design portfolio, UX design projects, digital product design projects, mobile app design portfolio, creative design projects, front-end development projects, tangible interfaces projects, and innovative product projects.</p>
    <ul>
        <li><a href="#">Interaction Design Projects</a></li>
        <li><a href="#">User Interface Design Portfolio</a></li>
        <li><a href="#">UX Design Projects</a></li>
        <li><a href="#">Digital Product Design Projects</a></li>
        <li><a href="#">Mobile App Design Portfolio</a></li>
        <li><a href="#">Creative Design Projects</a></li>
        <li><a href="#">Front-end Development Projects</a></li>
        <li><a href="#">Tangible Interfaces Projects</a></li>
        <li><a href="#">Innovative Product Projects</a></li>
    </ul>
</body>
</html>
```
