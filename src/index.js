import _ from 'lodash';
import './style.css';
import home from './home.js';
import menu from './menu';
import contact from './contact';
import nav from './nav';

home()

export default function options(){

    const navigation = document.createElement('div');
    navigation.classList.add("nav");

    const line1 = document.createElement('div')
    line1.classList.add('line')
    const line2 = document.createElement('div')
    line2.classList.add('line')
    const line3 = document.createElement('div')
    line3.classList.add('line')    

    navigation.appendChild(line1);
    navigation.appendChild(line2);
    navigation.appendChild(line3);
    
    
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

    document.body.appendChild(navigation);
    navigation.onclick = ()=>{nav(homebtn,menubtn,cbtn)}
    

};

options();