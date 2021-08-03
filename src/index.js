import House from '../src/House.js'

import './assets/styles/style.css'
import './assets/styles/style1.css'
import gerb from './assets/images/gerb.png';


const house = new House(9, 9, 2);

house.getInfo();

const img = document.createElement('img');

img.src = gerb;

document.body.appendChild(img)

