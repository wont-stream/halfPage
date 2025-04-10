import { render } from 'preact'
import './index.css'
import 'halfmoon/css/halfmoon.min.css';
import 'halfmoon/css/cores/halfmoon.modern.css';
import 'halfmoon/css/cores/halfmoon.elegant.css';
import App from './components/app.tsx'

const dataset = document.getElementById("html")!.dataset;

const colorScheme = localStorage.getItem("colorScheme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") || "auto";
if (colorScheme === "auto") {
    dataset.bsTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
} else {
    dataset.bsTheme = colorScheme;
}

dataset.bsCore = localStorage.getItem("theme") || "default";

const favicon = document.getElementById("favicon") as HTMLLinkElement;

fetch(`https://wttr.in/${localStorage.getItem("location") || ""}?format=%c`)
.then(res => res.text())
.then(emoji => {
    favicon.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji.trim()}</text></svg>`
})

render(<App />, document.getElementById('app')!)
