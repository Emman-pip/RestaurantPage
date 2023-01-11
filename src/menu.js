import options from "./index.js";
import './style.css';



export default function menu() {
    document.body.innerHTML = "";
    const content = document.createElement('div');
    content.classList.add('main');

    const name = document.createElement('h1');
    name.textContent = 'MENU';
    name.classList.add('name');
    content.appendChild(name);
    
    const desc = document.createElement('div');
    desc.textContent = "menu "
    desc.classList.add('content')
    content.appendChild(desc)
    
    document.body.appendChild(content);

    options();
}


