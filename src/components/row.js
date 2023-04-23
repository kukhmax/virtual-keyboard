'use strict';

import createKey from "./key";
import keys from "./key-names";

function createRow(cols, start) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = start; i < cols + start; i++) {
        const key = createKey(i);
        row.append(key);
    }
    return row;
}

export default createRow;