/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView2x extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
    <section>
    <h2>Ladies' Tshirts</h2>
    <ul class="mdc-image-list my-image-list">
    ${catalog.ladies.tshirts.map((item) => html`
      <li class="mdc-image-list__item">
        <a href=https://shop.polymer-project.org/detail/ladies_tshirts/${item.name}>
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

window.customElements.define('my-view2x', MyView2x);
