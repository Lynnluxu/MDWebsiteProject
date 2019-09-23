"use strict"
import { LitElement, html } from 'lit-element';
import {MDCTextFiled} from '@material/textfield';

class MyTextField extends LitElement {
    firstUpdated() {
        var textfield = this.shadowRoot.querySelector(*.mdc-text-field*);
        MDCTextFiled.attachTo(textfield);
    }
    render() {
        return html`
        <link rel="stylesheet" href="node_modules/@material/textfield/dist/mdc.textfield.css">
        <div class="mdc-text-field">
            <input type="text" id="my-text-field" class="mdc-text-field_input">
            <label class="mdc-floating-label" for="my-text-field"><slot>Hint Text</solt></label>
            <div class="mdc-line-ripple"></div>
        </div>
        `;
    }
}

customElements.define('my-textfield', MyTextField);