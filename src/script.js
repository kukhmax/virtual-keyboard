import createTextarea from './components/textarea';
import createKeyboard from './components/keyboard';

window.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div'),
          textarea = createTextarea(),
          keyboard = createKeyboard();

    container.classList.add('container');
    document.body.append(container);
    container.append(textarea);
    container.append(keyboard);

    const keys = container.querySelectorAll('.key'),
          caseDownKeys = keyboard.querySelectorAll('.key span.show .caseDown'),
          caseUpKeys = keyboard.querySelectorAll('.key span.show .caseUp'),
          capsKeys = keyboard.querySelectorAll('.key span.show .caps');

    keys.forEach(key => {
        if (key.classList.contains('CapsLock')) {

            key.addEventListener('click', (e) => {
                let target = e.currentTarget;
                target.classList.toggle('active');
                if (target.classList.contains('active')) {
                    caseDownKeys.forEach(key => {
                        key.classList.add('hidden');
                    });
                    capsKeys.forEach(key => {
                        key.classList.remove('hidden');
                    });

                } else {
                    caseDownKeys.forEach(key => {
                        key.classList.remove('hidden');
                    });
                    capsKeys.forEach(key => {
                        key.classList.add('hidden');
                    });
                }

            });
        } else if (key.classList.contains('ShiftLeft') ||
                   key.classList.contains('ShiftRight')) {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                target.classList.add('active');
                caseDownKeys.forEach(key => {
                    key.classList.add('hidden');
                });
                caseUpKeys.forEach(key => {
                    key.classList.remove('hidden');
                });
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                target.classList.remove('active');
                caseDownKeys.forEach(key => {
                    key.classList.remove('hidden');
                });
                caseUpKeys.forEach(key => {
                    key.classList.add('hidden');
                });
            });
        } else if (key.classList.contains('ControlLeft') ||
                   key.classList.contains('ControlRight') ||
                   key.classList.contains('AltLeft') ||
                   key.classList.contains('AltRight') ||
                   key.classList.contains('MetaLeft')) {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                target.classList.add('active');
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                target.classList.remove('active');
            });
        } else if (key.classList.contains('Backspace')) {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                target.classList.add('active');

                const cursorPosition = textarea.selectionStart;
                const textBeforeCursor = textarea.value.slice(0, cursorPosition);
                const lastElementPosition = textBeforeCursor.lastIndexOf(' ');
                const newText = textBeforeCursor.slice(0, lastElementPosition) + textarea.value.slice(cursorPosition);
                textarea.value = newText;
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                target.classList.remove('active');
            });
        } else if (key.classList.contains('Delete')) {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                target.classList.add('active');

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
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                target.classList.remove('active');
            });
        } else {
            key.addEventListener('mousedown', (e) => {
                let target = e.currentTarget;
                target.classList.add('active');

                const spans = key.querySelectorAll('span > span');
                spans.forEach(span => {
                    if (!span.classList.contains('hidden')) {
                        textarea.value += span.textContent;
                    }
                });
            });
            key.addEventListener('mouseup', (e) => {
                let target = e.currentTarget;
                target.classList.remove('active');
            });
        }

    });

});



