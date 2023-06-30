class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer is-100" style="margin-left: 2%">
      <div class="mail-me">
        <a href="mailto:souzanicolas87@gmail.com">
          <i class='bx bx-envelope'></i>
        </a>
      </div>
      <span class="footer-copy">&#169; All rights and lefts reserved. 2021.</span>
    </footer>
    `;
  }
}

customElements.define('main-footer', Footer);


