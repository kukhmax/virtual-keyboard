'use strict';

import createRow from './row';

function createKeyboard() {
    const keyboard = document.createElement('div'),
          row1 = createRow(14, 0),
          row2 = createRow(15, 14),
          row3 = createRow(13, 29),
          row4 = createRow(13, 42),
          row5 = createRow(9,55),
          rows = [row1, row2, row3, row4, row5];
    keyboard.classList.add('keyboard');
    row1.style.gridTemplateColumns = `repeat(14, auto)`;
    row2.style.gridTemplateColumns = `repeat(15, auto)`;
    row3.style.gridTemplateColumns = `repeat(13, auto)`;
    row4.style.gridTemplateColumns = `repeat(13, auto)`;
    row5.style.gridTemplateColumns = `repeat(9, auto)`;

    rows.forEach(row => {
        keyboard.append(row);
    });



    return keyboard;
}

export default createKeyboard;