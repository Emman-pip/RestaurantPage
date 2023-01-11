import _ from 'lodash';
import './style.css';
import home from './home.js';
import menu from './menu';
import contact from './contact';


home()

export default function options(){
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    document.body.appendChild(navbar)
    
    const homebtn = document.createElement('button');
    homebtn.innerHTML = "HOME";
    homebtn.onclick = home;
    navbar.appendChild(homebtn);
    homebtn.classList.add('fix')
    
    
    const menubtn = document.createElement('button');
    menubtn.innerHTML = "MENU";
    menubtn.onclick = menu;
    navbar.appendChild(menubtn);
    menubtn.classList.add('fix')
    
    
    const cbtn = document.createElement('button');
    cbtn.innerHTML = "CONTACTS";
    cbtn.onclick = contact;
    navbar.appendChild(cbtn);
    cbtn.classList.add('fix')

};

options();