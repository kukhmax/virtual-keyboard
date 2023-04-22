'use strict';

import keys from './key-names';

function innerSpan(spanKey, language) {
    const charsList = ['upperEng', 'lowerEng', 'upperRus', 'lowerRus'],
          classes = ['caseDown', 'caseUp', 'caps', 'shiftCaps'];

    for (let i = 0; i < classes.length; i++) {
        const span = document.createElement('span');

        if (language === 'rus') {

            span.classList.add(classes[i]);
            span.classList.add('hidden');
            span.textContent = keys[0][charsList[i % 2 === 0 ? 2 : 3]];
            spanKey.append(span);
        } else if (language === 'eng') {
            span.classList.add(classes[i]);
            span.classList.add('hidden');
            span.textContent = keys[0][charsList[i % 2 === 0 ? 0 : 1]];
            spanKey.append(span);
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

    innerSpan(langRus, 'rus');
    innerSpan(langEng, 'eng');

    return key;

}

export default createKey;