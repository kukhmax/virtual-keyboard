import createTextarea from './components/textarea';
import createKeyboard from './components/keyboard';

window.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div'),
          textarea = createTextarea(),
          keyboard = createKeyboard();

    container.classList.add('container');
    document.body.append(container);
    container.append(textarea);
    textarea.focus();

    container.append(keyboard);


});



