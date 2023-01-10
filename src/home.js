import options from "./index.js";
import './style.css';

export default function home() {
    document.body.innerHTML = "";
    const content = document.createElement('div');
    content.classList.add('main')

    const name = document.createElement('h1');
    name.textContent = 'Best Resto';
    name.classList.add('name');
    content.appendChild(name);
    
    const desc = document.createElement('div');
    desc.textContent = "The Best Resto is the peak of restaurants. It offers the best cuisine and dining experience world wide. Awarded with the first ever six stars, the restaurant takes pride in its prestigious nature"
    desc.classList.add('content')
    content.appendChild(desc)
    
    document.body.appendChild(content);

    options()
}