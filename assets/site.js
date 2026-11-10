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
    if (button.dataset.width) image.width = Number(button.dataset.width);
    if (button.dataset.height) image.height = Number(button.dataset.height);
  }
  buttons.forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', () => select(button));
  });
  if (buttons.length) select(buttons[0]);
});

// A small, nonmodal navigation tray inspired by the app's puck control.
document.querySelectorAll('[data-puck-navigation]').forEach((navigation) => {
  const button = navigation.querySelector('button');
  const links = navigation.querySelector('nav');
  function setOpen(open) {
    links.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? button.dataset.closeLabel : button.dataset.openLabel);
  }
  navigation.hidden = false;
  button.addEventListener('click', () => setOpen(links.hidden));
  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !links.hidden) {
      setOpen(false);
      button.focus();
    }
  });
});

// Show real native widget renders; the examples do not request or imply live scores.
document.querySelectorAll('[data-team-themes]').forEach((showcase) => {
  const buttons = Array.from(showcase.querySelectorAll('[data-theme]'));
  const image = showcase.querySelector('[data-theme-image]');
  const name = showcase.querySelector('[data-theme-name]');
  function select(button) {
    buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    image.src = button.dataset.image;
    image.alt = button.dataset.alt;
    name.textContent = button.dataset.name;
  }
  buttons.forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', () => select(button));
  });
  if (buttons.length) select(buttons[0]);
});
