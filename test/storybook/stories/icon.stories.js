import { html } from 'lit-html';
import '@eightshapes/esds-icon';

export default {
  title: 'Icon',
  component: 'esds-icon',
};

export const Default = () => html`
  <esds-icon></esds-icon>
`;

// import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';
// import { html } from 'lit-html';
// import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
//
//
// import '@eightshapes/esds-icon';
// import * as EsdsIcons from '@eightshapes/esds-icons';
// import icons from '!!raw-loader!@eightshapes/esds-icons/dist/esds-icons.svg'
// import iconSpriteNames from '@eightshapes/esds-icons/dist/esds-icon-names.json';
// const iconClassNames = Object.keys(EsdsIcons);
//
// <Meta
//   title="Icon"
//   parameters={{
//   }}
// />
//
// # Icon
// ## Installation
//
// ```bash
// npm install @eightshapes/esds-icon
// ```
//
// ## Default
// <Story name="Default">
//   {html`<esds-icon></esds-icon>`}
// </Story>
//
// ## Small
// <Story name="Small">
//   {html`<esds-icon size="small"></esds-icon>`}
// </Story>
//
// ## Large
// <Story name="Large">
//   {html`<esds-icon size="large"></esds-icon>`}
// </Story>
//
// ## Standalone, Accessible Title
// <Story name="Standalone, Accessible Title">
//   {html`<esds-icon title="stopwatch"></esds-icon>`}
// </Story>
//
// ## Gallery
// <Story name="Gallery">
//   {html`
//     ${iconClassNames.map(n => html`<esds-icon use="${EsdsIcons[n]}"></esds-icon>`)}
//   `}
// </Story>
//
// ## Gallery, Sprite Sheet
// <Story name="Gallery, Sprite Sheet">
//   {
//     html`
//     <!-- Hidden div containing svg sprite sheet -->
//     <div style="display: none;">${unsafeHTML(icons)}</div>
//     ${iconSpriteNames.map(n => html`<esds-icon use="#${n}"></esds-icon>`)}
//   `}
// </Story>
