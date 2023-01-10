import options from "./index.js";

export default function menu() {
    document.body.innerHTML = "";
    const content = document.createElement('div');

    const name = document.createElement('h1');
    name.textContent = 'Best Resto';
    name.classList.add('name');
    content.appendChild(name);
    
    const desc = document.createElement('div');
    desc.textContent = "menu"
    desc.classList.add('content')
    content.appendChild(desc)
    
    document.body.appendChild(content);

    options()
}