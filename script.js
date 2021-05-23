function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
 }
 
 function toggleName() {
    if (localStorage.getItem("theme") === "theme-dark") {
       setTheme("theme-light");
    } else {
       setTheme("theme-dark");
    }
 }
 
 (function () {
    if (localStorage.getItem("theme") === "theme-dark") {
       setTheme("theme-dark");
       document.getElementById("switch").checked = false;
    } else {
       setTheme("theme-light");
       document.getElementById("switch") = true;
    }
 })();