var _ = require('lodash');

import {area} from './js/circle';  // 이름이 같아야 됨
import cube from './js/cube';    // 이름을 마음대로 할 수 있음

import './css/style.css';
import './css/hello.scss';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

console.log(area(10));