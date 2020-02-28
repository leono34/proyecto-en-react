import jump from 'jump.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export function addJump(fromClass, toClass, offsetJump) {
  const classSelect = document.querySelector(`.${fromClass}`);
  classSelect.addEventListener('click', () => {
    jump(`.${toClass}`,{
      offset: offsetJump
    });
  });
}