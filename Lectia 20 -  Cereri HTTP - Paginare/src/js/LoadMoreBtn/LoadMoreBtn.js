export default class LoadMoreBtn {
  constructor({ selector, isHidden = false }) {
    this.button = this.getButton(selector);

    isHidden && this.hide();
  }
  // metoda care sa selecteze din html acel buton
  getButton(selector) {
    return document.querySelector(selector);
  }

  enable() {
    this.button.disabled = false;
    this.button.textConent = 'Load More';
  }

  disable() {
    this.button.disabled = true;
    this.button.textConent = 'Loading...';
  }

  show() {
    this.button.classList.remove('hidden');
  }

  hide() {
    this.button.classList.add('hidden');
  }
}
