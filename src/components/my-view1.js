import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';


class MyView1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
    <section>
    <h2>Men's Outerwears</h2>
    <ul class="mdc-image-list my-image-list">
    ${catalog.mens.outerwear.map((item) => html`
      <li class="mdc-image-list__item">
        <a href=https://shop.polymer-project.org/detail/mens_outerwear/${item.name}>
          <img class="mdc-image-list__image" src="${item.image}" alt="${item.title}" placeholder-img="${item.placeholder}">     
        </a>
        <div class="mdc-image-list__supporting">
          <span class="mdc-image-list__label">${item.title}</span>
        </div>
      </li>`
    )}
    </ul>
    </section>
  `;
  }
}

window.customElements.define('my-view1', MyView1);
