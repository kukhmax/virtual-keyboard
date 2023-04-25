'use strict';

function makeActiveKey(e) {
    let target = e.currentTarget;
    target.classList.add('active');
}

function makeNotActiveKey(e) {
    let target = e.currentTarget;
    target.classList.remove('active');
}

function eventCapsLock(e, caseDownKeys, capsKeys) {
    let target = e.currentTarget;
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

function eventShiftKeyDown(e, caseDownKeys, caseUpKeys) {
    makeActiveKey(e);
    caseDownKeys.forEach(key => {
        key.classList.add('hidden');
    });
    caseUpKeys.forEach(key => {
        key.classList.remove('hidden');
    });
}

function eventShiftKeyUp(e, caseDownKeys, caseUpKeys) {
    makeNotActiveKey(e);
    caseDownKeys.forEach(key => {
        key.classList.remove('hidden');
    });
    caseUpKeys.forEach(key => {
        key.classList.add('hidden');
    });
}

function eventBackSpaceDown(e, textarea) {
    makeActiveKey(e);

    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = textarea.value.slice(0, cursorPosition);
    const lastElementPosition = textBeforeCursor.lastIndexOf(' ');
    const newText = textBeforeCursor.slice(0, lastElementPosition) + textarea.value.slice(cursorPosition);
    textarea.value = newText;
}

function eventDeleteDown(e, textarea) {
    makeActiveKey(e);

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

function eventEnterDown(e, spans) {
    makeActiveKey(e);

    spans.forEach(span => {
        if (!span.classList.contains('hidden')) {
            textarea.value += '\n';
        }
    });
}

function eventTabDown(e, spans) {
    makeActiveKey(e);

    spans.forEach(span => {
        if (!span.classList.contains('hidden')) {
            textarea.value += '  ';
        }
    });
}

function eventKeyDown(e, spans) {
    makeActiveKey(e);

    spans.forEach(span => {
        if (!span.classList.contains('hidden')) {
            textarea.value += span.textContent;
        }
    });
}

export { eventCapsLock,
         eventShiftKeyDown,
         eventShiftKeyUp,
         makeActiveKey,
         makeNotActiveKey,
         eventBackSpaceDown,
         eventDeleteDown,
         eventEnterDown,
         eventTabDown,
         eventKeyDown };