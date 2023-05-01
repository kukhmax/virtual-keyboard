'use strict';

import createTextarea from './components/textarea';
import createKeyboard from './components/keyboard';
import {
    eventCapsLock,
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
          keyCapsLock = document.querySelector('.CapsLock'),
          caseDownKeys = keyboard.querySelectorAll('.key span.show .caseDown'),
          caseUpKeys = keyboard.querySelectorAll('.key span.show .caseUp'),
          capsKeys = keyboard.querySelectorAll('.key span.show .caps'),
          shiftCapsKeys = keyboard.querySelectorAll('.key span.show .shiftCaps');

    // physical keyboard

    document.addEventListener('keydown', (e) => {
        const code = e.code,
              target = document.querySelector(`.${code}`);
        const spans = document.querySelectorAll(`.{code} span > span`);

        if (code == 'CapsLock') {
            eventCapsLock(e, caseDownKeys, capsKeys, target);
        } else if (code == 'ShiftLeft' || code == 'ShiftRight') {
            eventShiftKeyDown(e, caseDownKeys, caseUpKeys, keyCapsLock, capsKeys, target);
        } else if (code == 'Backspace') {
            eventBackSpaceDown(e, textarea, target);
        } else if (code == 'Delete') {
            eventDeleteDown(e, textarea, target);
        } else if (code == 'Enter') {
            eventEnterDown(e, spans, target);
        } else if (code == 'Tab') {
            eventTabDown(e, spans, target);
        } else {
            eventKeyDown(e, spans, target);
        }
      });

      document.addEventListener('keyup', (e) => {
        if (code == 'ShiftLeft' || code == 'ShiftRight') {

            eventShiftKeyUp(e, caseDownKeys, caseUpKeys, target);
        } else if (code == 'Backspace' ||
                   code == 'Delete') {
            makeNotActiveKey(e, target);
        } else {
            makeNotActiveKey(e, target);
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
                    eventCapsLockShiftDown (e, capsKeys, shiftCapsKeys, target);
                });
                key.addEventListener('mouseup', (e) => {
                    let target = e.currentTarget;
                    eventCapsLockShiftUp (e, capsKeys, shiftCapsKeys, target);
                });

        // } else if (key.classList.contains('ShiftLeft') ||
        // key.classList.contains('ShiftRight')) {
        //     console.log()
        // key.addEventListener('mousedown', (e) => {
        //     let target = e.currentTarget;
        //     eventShiftKeyDown(e, caseDownKeys, caseUpKeys, target);
        // });
        // key.addEventListener('mouseup', (e) => {
        //     let target = e.currentTarget;
        //     eventShiftKeyUp(e, caseDownKeys, caseUpKeys, target);
        // });

        } else if (key.classList.contains('ControlLeft') ||
            key.classList.contains('ControlRight') ||
            key.classList.contains('AltLeft') ||
            key.classList.contains('AltRight') ||
            key.classList.contains('MetaLeft')) {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                makeActiveKey(e, target);
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                makeNotActiveKey(e, target);
            });
        } else if (key.classList.contains('Backspace')) {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                eventBackSpaceDown(e, textarea, target);
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                makeNotActiveKey(e, target);
            });
        } else if (key.classList.contains('Delete')) {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                eventDeleteDown(e, textarea, target);
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                makeNotActiveKey(e, target);
            });
        } else if (key.classList.contains('Enter')) {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                eventEnterDown(e, spans, target);
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                makeNotActiveKey(e, target);
            });
        } else if (key.classList.contains('Tab')) {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                eventTabDown(e, spans, target);
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                makeNotActiveKey(e, target);
            });
        } else {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                eventKeyDown(e, spans, target);
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                makeNotActiveKey(e, target);
            });
        }

        if (key.classList.contains('ShiftLeft') ||
            key.classList.contains('ShiftRight')) {

            if (keyCapsLock.classList.contains('active')) {
                key.addEventListener('mousedown', (e) => {
                    let target = e.currentTarget;

                    eventCapsLockShiftDown (e, capsKeys, shiftCapsKeys, target);
                });
                key.addEventListener('mouseup', (e) => {
                    let target = e.currentTarget;
                    eventCapsLockShiftUp (e, capsKeys, shiftCapsKeys, target);
                });
            }
            }

    });

});



