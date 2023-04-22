'use strict';

import keys from './key-names';

function innerSpan(lang) {
    const charsList = ['upperEng', 'lowerEng', 'upperRus', 'lowerRus'],
          classes = ['caseDown', 'caseUp', 'caps', 'shiftCaps'];

    for (let i = 0; i < classes.length; i++) {
        const span = document.createElement('span');

        if (lang === langRus) {

            span.classList.add(classes[i]);
            span.classList.add('hidden');
            span.textContent = keys[0][charsList[i % 2 === 0 ? 2 : 3]];
            lang.append(span);
        } else if (lang === langEng) {
            span.classList.add(classes[i]);
            span.classList.add('hidden');
            span.textContent = keys[0][charsList[i % 2 === 0 ? 0 : 1]];
            lang.append(span);
        }

    }
}

function createKey(chars) {
    const key = document.createElement('div'),
          langRus = document.createElement('span'),
          langEng = document.createElement('span');

    key.classList.add('key');
    key.append(langRus)
    langRus.classList.add('rus');
    langRus.classList.add('hidden');
    key.append(langEng);
    langEng.classList.add('eng');
    langEng.classList.add('hidden');

    innerSpan(langRus);
    innerSpan(langEng);

    return key;

}

export default createKey;