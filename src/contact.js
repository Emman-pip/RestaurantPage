import options from "./index.js";
import './style.css';

export default function contact() {
    document.body.innerHTML = "";
    const content = document.createElement('div');
    content.classList.add('main');

    const name = document.createElement('h1');
    name.textContent = 'CONTACT';
    name.classList.add('name');
    content.appendChild(name);
    
    const desc = document.createElement('div');
    desc.textContent = "contact us as 333-333-3333"
    desc.classList.add('content')
    content.appendChild(desc)
    
    document.body.appendChild(content);

    options()

}