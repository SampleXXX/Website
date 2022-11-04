
let currentPage = 0
let cssID = 'css'



let css = document.createElement('link');
css.rel = "stylesheet";
css.type ="text/css";
css.id = cssID;
css.href = "css/home.css";
document.head.appendChild(css);

let js = document.createElement('script');
js.src = "javascript/home.js";
document.body.appendChild(js);

function home() {
    if (currentPage != 1)
        document.getElementById(cssID).href = "css/home.css";

        js.src = "javascript/home.js";
        currentPage = 1;
    }


function contact() {
        if (currentPage != 3){
            document.getElementById(cssID).href = "css/contact.css";
            js.src = "javascript/contact.js";
        
            currentPage = 3;
        }
}
function about() {
    if (currentPage != 2){
        document.getElementById(cssID).href = "css/about.css";
        js.src = 'javscript/about.js';
        currentPage = 2;

    }
}
