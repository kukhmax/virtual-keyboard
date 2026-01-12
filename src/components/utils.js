'use strict';

function makeActiveKey(e, target) {
    target.classList.add('active');
}

function makeNotActiveKey(e, target) {
    target.classList.remove('active');
}

function eventCapsLock(e, caseDownKeys, capsKeys, target) {
    target.classList.toggle('active');
    if (target.classList.contains('active')) {

        caseDownKeys.forEach(key => {
            if (/[а-яёa-z]/.test(key.textContent)) {
                key.classList.add('hidden');
            }

        });
        capsKeys.forEach(key => {
            if (/[A-ZЁА-Я]/.test(key.textContent)) {
                key.classList.remove('hidden');
            }

        });

    } else {
        caseDownKeys.forEach(key => {
            key.classList.remove('hidden');
        });
        capsKeys.forEach(key => {
            key.classList.add('hidden');
        });
    }
}

function eventCapsLockShiftDown (e, capsKeys, shiftCapsKeys, target) {
    makeActiveKey(e, target);

    shiftCapsKeys.forEach(key => {
        if (/[а-яёa-z]/.test(key.textContent)) {
            key.classList.remove('hidden');
        }

    });
    capsKeys.forEach(key => {
        if (/[A-ZЁА-Я]/.test(key.textContent)) {
            key.classList.add('hidden');
        } else {
            key.classList.remove('hidden');
        }

    });
}

function eventCapsLockShiftUp (e, capsKeys, shiftCapsKeys, target) {
    makeNotActiveKey(e, target);

    shiftCapsKeys.forEach(key => {
        if (/[а-яёa-z]/.test(key.textContent)) {
            key.classList.add('hidden');
        } else {
            key.classList.remove('hidden');
        }

    });
    capsKeys.forEach(key => {
        if (/[A-ZЁА-Я]/.test(key.textContent)) {
            key.classList.remove('hidden');
        } else {
            key.classList.add('hidden');
        }

    });
}

function eventShiftKeyDown(e, caseDownKeys, caseUpKeys, keyCapsLock, capsKeys, target) {
    makeActiveKey(e, target);
    if (keyCapsLock.classList.contains('active')) {
        // console.log('cccccccccc');
        capsKeys.forEach(key => {
            if (/[A-ZЁА-Я]/.test(key.textContent)) {
                console.log('cccccccccc');
                key.classList.add('hidden');
            }

        });
        // caseDownKeys.forEach(key => {
        //     if (/)
        // })
    }
    caseDownKeys.forEach(key => {
        key.classList.add('hidden');
    });
    caseUpKeys.forEach(key => {
        key.classList.remove('hidden');
    });
}

function eventShiftKeyUp(e, caseDownKeys, caseUpKeys, target) {
    makeNotActiveKey(e, target);
    caseDownKeys.forEach(key => {
        key.classList.remove('hidden');
    });
    caseUpKeys.forEach(key => {
        key.classList.add('hidden');
    });
}

function eventBackSpaceDown(e, textarea, target) {
    makeActiveKey(e, target);

    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = textarea.value.slice(0, cursorPosition);
    const lastElementPosition = textBeforeCursor.lastIndexOf(' ');
    const newText = textBeforeCursor.slice(0, lastElementPosition) + textarea.value.slice(cursorPosition);
    textarea.value = newText;
}

function eventDeleteDown(e, textarea, target) {
    makeActiveKey(e, target);

    const cursorPosition = textarea.selectionStart;
    const textAfterCursor = textarea.value.slice(cursorPosition);
    const nextElementPosition = textAfterCursor.indexOf(' ');

    // Если следующий элемент не найден, удаляем текст после курсора
    if (nextElementPosition === -1) {
        textarea.value = textarea.value.slice(0, cursorPosition);
    } else {
        const newText = textarea.value.slice(0, cursorPosition) + textAfterCursor.slice(nextElementPosition + 1);
        textarea.value = newText;
    }

    // Устанавливаем курсор в правильное место
    textarea.selectionStart = textarea.selectionEnd = cursorPosition;
}

function eventEnterDown(e, spans, target) {
    makeActiveKey(e, target);

    spans.forEach(span => {
        if (!span.classList.contains('hidden')) {
            textarea.value += '\n';
        }
    });
}

function eventTabDown(e, spans, target) {
    makeActiveKey(e, target);

    spans.forEach(span => {
        if (!span.classList.contains('hidden')) {
            textarea.value += '  ';
        }
    });
}

function eventKeyDown(e, spans, target) {
    makeActiveKey(e, target);

    spans.forEach(span => {
        if (!span.classList.contains('hidden')) {
            textarea.value += span.textContent;
        }
    });
}

export { eventCapsLock,
         eventCapsLockShiftDown,
         eventCapsLockShiftUp,
         eventShiftKeyDown,
         eventShiftKeyUp,
         makeActiveKey,
         makeNotActiveKey,
         eventBackSpaceDown,
         eventDeleteDown,
         eventEnterDown,
         eventTabDown,
         eventKeyDown };