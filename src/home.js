import options from "./index.js";
import './style.css';
import image1 from './food1.jpg'
import image2 from './food2.jpg'
import image3 from './food3.jpg'
export default function home() {
    document.body.innerHTML = "";
    const content = document.createElement('div');
    content.classList.add('main');

    const content2 = document.createElement('div')
    content2.classList.add('main2')

    const name = document.createElement('h1');
    name.textContent = 'Best Resto';
    name.classList.add('name');
    content.appendChild(name);


    
    const desc = document.createElement('div');
    desc.textContent = "The Best Resto is the peak of restaurants. It offers the best cuisine and dining experience world wide. Awarded with the first ever six stars, the restaurant takes pride in its prestigious nature"
    desc.classList.add('content')
    content.appendChild(desc)

    const div = document.createElement('form');
    div.classList.add('reserv')


    const button = document.createElement('button');
    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = 'email@example.com';
    button.innerHTML = 'book a reservation';
    button.addEventListener('click', ()=>event.preventDefault())
    
    div.appendChild(email);
    div.appendChild(button);
    desc.appendChild(div);

    button.classList.add('color');
    document.body.appendChild(content);
    
    
    const array = [image1,image2,image3]
    let i = 0;
    const nImage = new Image
    nImage.classList.add('image')
    function lol(){
        if (i<array.length){
            nImage.src = array[i]
            i++
        }else {
            i=0
        }
        setTimeout(()=>lol(),2000)
    }
    lol()

    content2.appendChild(nImage)
    document.body.appendChild(content2);

    options();

    const circle = document.createElement('div');
    circle.classList.add('circle')
    document.body.appendChild(circle)

    const circle2 = document.createElement('div');
    circle2.classList.add('circle2')
    document.body.appendChild(circle2)

}



