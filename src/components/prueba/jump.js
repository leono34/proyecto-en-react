import jump from '../prueba/jump.js';

export default function addJump(fromClass, toClass, offsetJump) {
  const classSelect = document.querySelector(`.${fromClass}`);
  classSelect.addEventListener('click', () => {
    jump(`.${toClass}`,{
      offset: offsetJump
    });
  });
}
export { addJump };
