import options from "./index.js";
import './style.css';
import phone from './phone.svg'
export default function contact() {
    document.body.innerHTML = "";
    const content = document.createElement('div');
    content.classList.add('main');

    const name = document.createElement('h1');
    name.textContent = 'CONTACT';
    name.classList.add('name');
    content.appendChild(name);
    
    const desc = document.createElement('div');
    desc.classList.add('content');
    content.appendChild(desc);

    const phon = new Image;
    phon.src = phone;
    desc.appendChild(phon);
    
    document.body.appendChild(content);

    options()

}