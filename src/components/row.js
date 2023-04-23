'use strict';

import createKey from "./key";

function createRow(cols) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < cols; i++) {
        const key = createKey(i);
        row.append(key);
    }
    return row;
}

export default createRow;