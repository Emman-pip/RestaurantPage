import _ from 'lodash';
import './style.css';
import home from './home.js';
import menu from './menu';
import contact from './contact';

home()

export default function options(){

    const homebtn = document.createElement('button');
    homebtn.innerHTML = "HOME";
    homebtn.onclick = home;
    document.body.appendChild(homebtn);
    homebtn.classList.add('fixed')
   

    const menubtn = document.createElement('button');
    menubtn.innerHTML = "MENU";
    menubtn.onclick = menu;
    document.body.appendChild(menubtn);
    menubtn.classList.add('fixed2')


    const cbtn = document.createElement('button');
    cbtn.innerHTML = "CONTACT";
    cbtn.onclick = contact;
    document.body.appendChild(cbtn);
    cbtn.classList.add('fixed3')
};

options();