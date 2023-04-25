import createTextarea from './components/textarea';
import createKeyboard from './components/keyboard';
import {
    eventCapsLock,
    eventShiftKeyDown,
    eventShiftKeyUp,
    makeActiveKey,
    makeNotActiveKey,
    eventBackSpaceDown,
    eventDeleteDown,
    eventEnterDown,
    eventTabDown,
    eventKeyDown
} from './components/utils';

window.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div'),
        textarea = createTextarea(),
        keyboard = createKeyboard();

    container.classList.add('container');
    document.body.append(container);
    container.append(textarea);
    container.append(keyboard);

    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);

    const keys = container.querySelectorAll('.key'),
        caseDownKeys = keyboard.querySelectorAll('.key span.show .caseDown'),
        caseUpKeys = keyboard.querySelectorAll('.key span.show .caseUp'),
        capsKeys = keyboard.querySelectorAll('.key span.show .caps');

    keys.forEach(key => {
        const spans = key.querySelectorAll('span > span');

        if (key.classList.contains('CapsLock')) {

            key.addEventListener('click', (e) => {
                eventCapsLock(e, caseDownKeys, capsKeys);

            });
        } else if (key.classList.contains('ShiftLeft') ||
            key.classList.contains('ShiftRight')) {
            key.addEventListener('mousedown', (e) => {
                eventShiftKeyDown(e, caseDownKeys, caseUpKeys)
            });
            key.addEventListener('mouseup', (e) => {
                eventShiftKeyUp(e, caseDownKeys, caseUpKeys)
            });
        } else if (key.classList.contains('ControlLeft') ||
            key.classList.contains('ControlRight') ||
            key.classList.contains('AltLeft') ||
            key.classList.contains('AltRight') ||
            key.classList.contains('MetaLeft')) {
            key.addEventListener('mousedown', (e) => {
                makeActiveKey(e);
            });
            key.addEventListener('mouseup', (e) => {
                makeNotActiveKey(e);
            });
        } else if (key.classList.contains('Backspace')) {
            key.addEventListener('mousedown', (e) => {
                eventBackSpaceDown(e, textarea);
            });
            key.addEventListener('mouseup', (e) => {
                makeNotActiveKey(e);
            });
        } else if (key.classList.contains('Delete')) {
            key.addEventListener('mousedown', (e) => {
                eventDeleteDown(e, textarea);
            });
            key.addEventListener('mouseup', (e) => {
                makeNotActiveKey(e);
            });
        } else if (key.classList.contains('Enter')) {
            key.addEventListener('mousedown', (e) => {
                eventEnterDown(e, spans);
            });
            key.addEventListener('mouseup', (e) => {
                makeNotActiveKey(e);
            });
        } else if (key.classList.contains('Tab')) {
            key.addEventListener('mousedown', (e) => {
                eventTabDown(e, spans);
            });
            key.addEventListener('mouseup', (e) => {
                makeNotActiveKey(e);
            });
        } else {
            key.addEventListener('mousedown', (e) => {
                eventKeyDown(e, spans);
            });
            key.addEventListener('mouseup', (e) => {
                makeNotActiveKey(e);
            });
        }
    });
});



