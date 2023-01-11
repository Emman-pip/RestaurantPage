import options from "./index.js";
import './style.css';
import phone from './phone.svg'
export default function contact() {
    document.body.innerHTML = "";
    const content = document.createElement('div');
    content.classList.add('main');

    const name = document.createElement('h1');
    name.textContent = 'CONTACT US';
    name.classList.add('name');
    content.appendChild(name);
    
    const desc = document.createElement('div');
    desc.classList.add('content');
    content.appendChild(desc);

    const map = document.createElement('div');
    map.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2248721.6101483167!2d114.77616644930342!3d15.278300474623768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1673478717252!5m2!1sen!2sph" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    desc.appendChild(map)
    map.classList.add('middle')
    const located = document.createElement('div')
    located.innerHTML = "We are located at:\n                  Nowhere"
    map.appendChild(located)
    located.classList.add('middle')


    
    document.body.appendChild(content);

    options()

}