// Progressive enhancement: all preview descriptions stay visible without JavaScript.
document.querySelectorAll('[data-preview]').forEach((preview) => {
  const buttons = Array.from(preview.querySelectorAll('[data-panel]'));
  const panels = Array.from(preview.querySelectorAll('.tour-content'));
  const image = preview.querySelector('[data-preview-image]');
  function select(button) {
    buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    panels.forEach((panel) => { panel.hidden = panel.id !== button.dataset.panel; });
    image.src = button.dataset.image;
    image.alt = button.dataset.alt;
  }
  buttons.forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', () => select(button));
  });
  if (buttons.length) select(buttons[0]);
});
