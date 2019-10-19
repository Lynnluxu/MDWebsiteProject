/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

*/

import { css } from 'lit-element';

export const SharedStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }


  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  img {
    opacity: 1;
    transition: opacity 0.5s ease 0s;
  }
  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
    mdc-image-list__image {
      width: 100%;
      height: auto;
      max-width: 100%; 
      display: block;
    }

  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }
/* MDC components, loaded manually */
  .mdc-image-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0;
  }
  
  .mdc-image-list__item,
  .mdc-image-list__image-aspect-container {
    position: relative;
    box-sizing: border-box;
  }
  
  .mdc-image-list__item {
    list-style-type: none;
  }
  
  .mdc-image-list__image {
    width: 100%;
    height: auto;
    max-width: 100%; 
    display: block;
  }
  
  .mdc-image-list__image-aspect-container .mdc-image-list__image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  
  .mdc-image-list__image-aspect-container {
    padding-bottom: calc(100% / 1);
  }
  
  .mdc-image-list__image {
    border-radius: 0;
  }
  
  .mdc-image-list--with-text-protection .mdc-image-list__supporting {
    border-radius: 0 0 0 0;
  }
  
  .mdc-image-list__supporting {
    color: rgba(0, 0, 0, 0.87);
    /* @alternate */
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 8px 0;
    line-height: 24px;
  }
  
  .mdc-image-list__label {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .mdc-image-list--with-text-protection .mdc-image-list__supporting {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px;
    padding: 0 16px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
  }
  
  .mdc-image-list--masonry {
    display: block;
  }
  .mdc-image-list--masonry .mdc-image-list__item {
    -webkit-column-break-inside: avoid;
            break-inside: avoid-column;
  }
  .mdc-image-list--masonry .mdc-image-list__image {
    display: block;
    height: auto;
  }

  .mdc-typography {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  .mdc-typography--headline1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 6rem;
    line-height: 6rem;
    font-weight: 300;
    letter-spacing: -0.015625em;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--headline2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 3.75rem;
    line-height: 3.75rem;
    font-weight: 300;
    letter-spacing: -0.0083333333em;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--headline3 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 3rem;
    line-height: 3.125rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--headline4 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 2.125rem;
    line-height: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.0073529412em;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--headline5 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--headline6 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--subtitle1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--subtitle2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: 0.0071428571em;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--body1 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.03125em;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--body2 {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--caption {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0333333333em;
    text-decoration: inherit;
    text-transform: inherit;
  }
  
  .mdc-typography--button {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    text-decoration: none;
    text-transform: uppercase;
  }
  
  .mdc-typography--overline {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 0.75rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.1666666667em;
    text-decoration: none;
    text-transform: uppercase;
  }

  .my-image-list {
    .mdc-image-list-standard-columns(2);
    .mdc-image-list__supporting {
      justify-content: center;
    }
  
    .mdc-image-list__item {
      padding: 10px;
    }
  
    .mdc-image-list__label {
      .mdc-typography(subtitle2);
  }
`;

