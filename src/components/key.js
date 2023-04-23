'use strict';

import keys from './key-names';

function innerSpan(spanKey, language, index) {
    const charsList = ['lowerEng', 'upperEng', 'lowerRus', 'upperRus'],
          classes = ['caseDown', 'caseUp', 'caps', 'shiftCaps'];

          if (keys[index].code) {
            spanKey.parentNode.classList.add(keys[index].code);
          }

    for (let i = 0; i < classes.length; i++) {
        const span = document.createElement('span');

        if (language === 'rus') {

            span.classList.add(classes[i]);
            span.classList.add('hidden');
            span.textContent = keys[index][charsList[i % 2 === 0 ? 2 : 3]];
            spanKey.append(span);
        } else if (language === 'eng') {
            span.classList.add(classes[i]);
            if (i !== 0) {
                span.classList.add('hidden');
            }
            span.textContent = keys[index][charsList[i % 2 === 0 ? 0 : 1]];
            spanKey.append(span);
        }

    }
}

function createKey(index) {
    const key = document.createElement('div'),
          langRus = document.createElement('span'),
          langEng = document.createElement('span');

    key.classList.add('key');
    key.append(langRus)
    langRus.classList.add('rus');
    langRus.classList.add('hidden');
    key.append(langEng);
    langEng.classList.add('eng');
    // langEng.classList.add('show');

    innerSpan(langRus, 'rus', index);
    innerSpan(langEng, 'eng', index);

    return key;

}

export default createKey;