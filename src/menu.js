import options from "./index.js";
import './style.css';
import image1 from './food1.jpg'
import image2 from './food2.jpg'
import image3 from './food3.jpg'

export default function menu() {
    document.body.innerHTML = "";
    const content = document.createElement('div');
    content.classList.add('main');

    const name = document.createElement('h1');
    name.textContent = 'MENU';
    name.classList.add('name');
    content.appendChild(name);
    
    const desc = document.createElement('div');
    desc.classList.add('content')


    const food1 = document.createElement('div')
    desc.appendChild(food1)
    food1.classList.add('food')

    const pic1 = new Image
    pic1.src = image1
    pic1.classList.add('pic')
    food1.appendChild(pic1)

    const desc1 = document.createElement('div')
    desc1.innerHTML = "The Chinese full meal course. Complimented by every single costumer for its complex yet complimentary flavors "
    desc1.classList.add('description')
    food1.appendChild(desc1)

    /* */
    const food2 = document.createElement('div')
    desc.appendChild(food2)
    food2.classList.add('food')

    const desc2 = document.createElement('div')
    desc2.innerHTML = "The morning full meal course. Famous for its simple yet satisfying flavors"
    desc2.classList.add('description')
    food2.appendChild(desc2)

    const pic2 = new Image
    pic2.src = image2
    pic2.classList.add('pic')
    food2.appendChild(pic2)

    const food3 = document.createElement('div')
    desc.appendChild(food3)
    food3.classList.add('food')

    const pic3 = new Image
    pic3.src = image3
    pic3.classList.add('pic')
    food3.appendChild(pic3)

    const desc3 = document.createElement('div')
    desc3.innerHTML = "The random full mean course. Let our world class chefs surprise you with their skills and expertise"
    desc3.classList.add('description')
    food3.appendChild(desc3)


    content.appendChild(desc)
    
    document.body.appendChild(content);

    const circle2 = document.createElement('div');   
    circle2.classList.add('circle4')
    document.body.appendChild(circle2)

    const circle3 = document.createElement('div');
    circle3.classList.add('circle3')
    document.body.appendChild(circle3)

    options();
}


