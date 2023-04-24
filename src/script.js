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
          caseDownKeys = keyboard.querySelectorAll('.caseDown'),
          caseUpKeys = keyboard.querySelectorAll('.caseUp');


    keys.forEach(key => {
        if (key.classList.contains('CapsLock')) {
            key.addEventListener('click', (e) => {
                let target = e.currentTarget;
                target.classList.toggle('active');
                if (target.classList.contains('active')) {
                    caseDownKeys.forEach(key => {
                        key.classList.add('hidden');
                    });
                    caseUpKeys.forEach(key => {
                        key.classList.remove('hidden');
                    });
                } else {
                    caseDownKeys.forEach(key => {
                        key.classList.remove('hidden');
                    });
                    caseUpKeys.forEach(key => {
                        key.classList.add('hidden');
                    });
                }

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



