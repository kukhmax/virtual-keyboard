'use strict';

function createTextarea() {
    const textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'textarea');
    textarea.setAttribute('rows', '5');
    textarea.setAttribute('cols', '50');
    textarea.classList.add("textarea");

    return textarea;
}

export default createTextarea;