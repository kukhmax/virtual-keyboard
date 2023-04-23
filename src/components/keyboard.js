'use strict';

import createRow from './row';

function createKeyboard() {
    const keyboard = document.createElement('div'),
          row  = createRow(14);
    keyboard.classList.add('keyboard');

    keyboard.append(row);


    return keyboard;
}

export default createKeyboard;