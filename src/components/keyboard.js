'use strict';

import createKey from './key';

function createKeyboard() {
    const keyboard = document.createElement('div'),
          key = createKey('o');
    keyboard.classList.add('keyboard');

    keyboard.append(key);


    return keyboard;
}

export default createKeyboard;
document.createElement('span')