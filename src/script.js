import createTextarea from './components/textarea';
import createKeyboard from './components/keyboard';

window.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div'),
          textarea = createTextarea(),
          keyboard = createKeyboard();

    container.classList.add('container');
    document.body.append(container);
    container.append(textarea);
    // textarea.focus();

    container.append(keyboard);

    const keys = container.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', (e) => {
            let target = e.currentTarget;
            // console.log(target.textContent)
            target.classList.add('active');
            setTimeout(function() {
                target.classList.remove('active');
              }, 300);

              const spans = key.querySelectorAll('span > span');
              spans.forEach(span => {
                  if (!span.classList.contains('hidden')) {
                      textarea.value += span.textContent;
                  }
              });
        });
    });

});



