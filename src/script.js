'use strict';

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
        capsKeys = keyboard.querySelectorAll('.key span.show .caps'),
        shiftCapsKeys = keyboard.querySelectorAll('.key span.show .shiftCaps');

    // physical keyboard

    document.addEventListener('keydown', (e) => {
        if (e.code == 'CapsLock') {
            let target = document.querySelector(`.${e.code}`);
            eventCapsLock(e, caseDownKeys, capsKeys, target);
        } else if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
            let target = document.querySelector(`.${e.code}`);
            eventShiftKeyDown(e, caseDownKeys, caseUpKeys, target);
        }
      });

      document.addEventListener('keyup', (e) => {
        if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
            let target = document.querySelector(`.${e.code}`);
            eventShiftKeyUp(e, caseDownKeys, caseUpKeys, target);
        }
      });

    // virtual keyboard

    keys.forEach(key => {
        const spans = key.querySelectorAll('span > span');

        if (key.classList.contains('CapsLock')) {

            key.addEventListener('click', (e) => {
                let target = e.currentTarget;
                eventCapsLock(e, caseDownKeys, capsKeys, target);

            });
        } else if (key.classList.contains('ShiftLeft') ||
            key.classList.contains('ShiftRight')) {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                eventShiftKeyDown(e, caseDownKeys, caseUpKeys, target);
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                eventShiftKeyUp(e, caseDownKeys, caseUpKeys, target);
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



