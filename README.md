# ☕ ChaiWaliCSS

> A lightweight, utility-first CSS engine powered by vanilla JavaScript — no build step, no config, just sip and style.

[![npm version](https://img.shields.io/npm/v/chaiwalicss?color=c96f2c&label=npm&logo=npm)](https://www.npmjs.com/package/chaiwalicss)
[![npm downloads](https://img.shields.io/npm/dm/chaiwalicss?color=e8a94a&label=downloads)](https://www.npmjs.com/package/chaiwalicss)
[![license](https://img.shields.io/npm/l/chaiwalicss?color=4a7c59)](./LICENSE)
[![bundle size](https://img.shields.io/badge/size-~2KB-informational?color=3b1f10)](https://www.npmjs.com/package/chaiwalicss)

---

## 📖 Table of Contents

- [What is ChaiWaliCSS?](#-what-is-chaiwalicss)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [How It Works](#-how-it-works)
- [Class Name Syntax](#-class-name-syntax)
- [Multi-Word Values](#-multi-word-values)
- [Property Reference](#-property-reference)
- [Extending with Custom Aliases](#-extending-with-custom-aliases)
- [Comparison](#-comparison)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🍵 What is ChaiWaliCSS?

**ChaiWaliCSS** is a zero-dependency, utility-first CSS engine that lets you apply CSS styles directly in your HTML using simple shorthand class names — all processed at runtime by a tiny JavaScript engine.

No PostCSS. No Webpack. No compilation. Just import and go.

```html
<!-- This is all it takes -->
<div class="chai-bg-#1a1a2e chai-p-24px chai-brdRadius-12px chai-d-flex chai-jc-center">
  <h1 class="chai-clr-white chai-fs-2rem chai-fw-700">Hello, World!</h1>
</div>
```

---

## 📦 Installation

### via npm

```bash
npm install chaiwalicss
```

### via yarn

```bash
yarn add chaiwalicss
```

### via pnpm

```bash
pnpm add chaiwalicss
```

---

## 🚀 Quick Start

Add the script tag at the bottom of your HTML `<body>`, pointing to the installed package file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My App</title>
</head>
<body>

  <div class="chai-bg-tomato chai-p-20px chai-brdRadius-8px">
    <p class="chai-clr-white chai-fs-1.2rem chai-fw-600">Styled with ChaiWaliCSS!</p>
  </div>

  <script type="module" src="./node_modules/chaiwalicss/applychai.js"></script>
</body>
</html>
```

> **Note:** Use `type="module"` on the script tag since ChaiWaliCSS uses ES module syntax. Place the script **after** your HTML elements so the DOM is ready when the engine runs.

---

## ⚙️ How It Works

ChaiWaliCSS uses JavaScript DOM traversal to scan every element on the page. When it finds a class prefixed with `chai-`, it:

1. **Parses** the class name into a `property` and a `value`
2. **Maps** the shorthand alias to a full CSS property name via the property dictionary
3. **Applies** the style directly using `element.style[property] = value`

```
chai-{property}-{value}
  │       │         └──▶  CSS value  (e.g. 24px, red, flex, 700)
  │       └──────────────▶ Shorthand alias  (e.g. p → padding, fs → font-size)
  └──────────────────────▶ Prefix (required — identifies ChaiWaliCSS classes)
```

**Example Parsing:**

| Class Name            | Property Alias | Resolves To    | Value   |
|-----------------------|----------------|----------------|---------|
| `chai-p-16px`         | `p`            | `padding`      | `16px`  |
| `chai-fs-1.5rem`      | `fs`           | `font-size`    | `1.5rem`|
| `chai-d-flex`         | `d`            | `display`      | `flex`  |
| `chai-brdRadius-50%`  | `brdRadius`    | `border-radius`| `50%`   |
| `chai-bg-#ff6600`     | `bg`           | `background-color` | `#ff6600` |

---

## 🏷️ Class Name Syntax

The pattern for every ChaiWaliCSS class is:

```
chai-{alias}-{value}
```

- The prefix `chai-` is **required**
- `{alias}` is a **shorthand** from the property map (see reference below)
- `{value}` is any **valid CSS value** — no quotes needed

### Examples

```html
<!-- Spacing -->
<div class="chai-m-auto chai-p-32px chai-mt-16px chai-pb-8px"></div>

<!-- Typography -->
<p class="chai-ff-Georgia chai-fs-18px chai-fw-500 chai-clr-#333"></p>

<!-- Flexbox -->
<div class="chai-d-flex chai-jc-space-between chai-ai-center chai-gap-12px"></div>

<!-- Sizing -->
<img class="chai-w-100px chai-h-100px chai-brdRadius-50%" />

<!-- Background -->
<section class="chai-bg-#f0f4f8 chai-bgSize-cover chai-bgPos-center"></section>

<!-- Positioning -->
<div class="chai-pos-absolute chai-z-10 chai-w-100%"></div>
```

---

## 🔠 Multi-Word Values

Some CSS values contain spaces (e.g. `1px solid red`, `bold 16px Arial`). In ChaiWaliCSS, **use dashes (`-`) where there would be spaces**, and the engine automatically converts them:

```html
<!-- border: 1px solid red -->
<div class="chai-brd-1px-solid-red"></div>

<!-- font: bold 16px Arial -->
<p class="chai-font-bold-16px-Arial"></p>

<!-- box-shadow: 0px 4px 12px rgba(0,0,0,0.2) -->
<div class="chai-boxShadow-0px-4px-12px-gray"></div>
```

> **Tip:** Dashes between words in the *value* are treated as spaces. The property alias itself should have no dashes (it's camelCase or a short string).

---

## 📚 Property Reference

All shorthand aliases are defined in `customProperty.js`. Here is the full reference:

### 📐 Spacing

| Alias | CSS Property     |
|-------|-----------------|
| `m`   | `margin`         |
| `mt`  | `margin-top`     |
| `mr`  | `margin-right`   |
| `mb`  | `margin-bottom`  |
| `ml`  | `margin-left`    |
| `p`   | `padding`        |
| `pt`  | `padding-top`    |
| `pr`  | `padding-right`  |
| `pb`  | `padding-bottom` |
| `pl`  | `padding-left`   |

### 🎨 Colors

| Alias          | CSS Property              |
|----------------|--------------------------|
| `clr`          | `color`                  |
| `brdClr`       | `border-color`           |
| `textDecClr`   | `text-decoration-color`  |
| `caretClr`     | `caret-color`            |
| `columnRuleClr`| `column-rule-color`      |

### 🖼️ Background

| Alias       | CSS Property              |
|-------------|--------------------------|
| `bg`        | `background-color`       |
| `bgImg`     | `background-image`       |
| `bgPos`     | `background-position`    |
| `bgSize`    | `background-size`        |
| `bgRepeat`  | `background-repeat`      |
| `bgAttach`  | `background-attachment`  |
| `bgClip`    | `background-clip`        |
| `bgOrigin`  | `background-origin`      |

### 📏 Sizing

| Alias  | CSS Property  |
|--------|--------------|
| `w`    | `width`       |
| `h`    | `height`      |
| `minW` | `min-width`   |
| `maxW` | `max-width`   |
| `minH` | `min-height`  |
| `maxH` | `max-height`  |

### 📦 Box Model

| Alias       | CSS Property    |
|-------------|----------------|
| `boxSizing` | `box-sizing`   |
| `brd`       | `border`        |
| `brdW`      | `border-width`  |
| `brdStyle`  | `border-style`  |
| `brdRadius` | `border-radius` |
| `boxShadow` | `box-shadow`    |

### ✏️ Typography / Fonts

| Alias          | CSS Property       |
|----------------|-------------------|
| `ff`           | `font-family`      |
| `fs`           | `font-size`        |
| `fw`           | `font-weight`      |
| `fst`          | `font-style`       |
| `fontVariant`  | `font-variant`     |
| `fontStretch`  | `font-stretch`     |
| `font`         | `font`             |
| `lineHeight`   | `line-height`      |
| `letterSpacing`| `letter-spacing`   |
| `wordSpacing`  | `word-spacing`     |
| `textIndent`   | `text-indent`      |
| `textOverflow` | `text-overflow`    |
| `whiteSpace`   | `white-space`      |
| `wordBreak`    | `word-break`       |

### 🗂️ Display & Flexbox

| Alias       | CSS Property       |
|-------------|--------------------|
| `d`         | `display`          |
| `flexDir`   | `flex-direction`   |
| `flexWrap`  | `flex-wrap`        |
| `flexFlow`  | `flex-flow`        |
| `jc`        | `justify-content`  |
| `ai`        | `align-items`      |
| `ac`        | `align-content`    |
| `as`        | `align-self`       |
| `pi`        | `place-items`      |
| `pc`        | `place-content`    |
| `gap`       | `gap`              |
| `columnGap` | `column-gap`       |
| `rowGap`    | `row-gap`          |
| `flex`      | `flex`             |
| `flexGrow`  | `flex-grow`        |
| `flexShrink`| `flex-shrink`      |
| `flexBasis` | `flex-basis`       |
| `order`     | `order`            |

### ▦ Grid

| Alias              | CSS Property              |
|--------------------|--------------------------|
| `gridTemplateCols` | `grid-template-columns`  |
| `gridTemplateRows` | `grid-template-rows`     |
| `gridArea`         | `grid-area`              |
| `gridAutoCols`     | `grid-auto-columns`      |
| `gridAutoRows`     | `grid-auto-rows`         |
| `gridAutoFlow`     | `grid-auto-flow`         |

### 📍 Position

| Alias           | CSS Property      |
|-----------------|------------------|
| `pos`           | `position`        |
| `z`             | `z-index`         |
| `verticalAlign` | `vertical-align`  |

### 🖼️ Image & Object

| Alias            | CSS Property        |
|------------------|-------------------|
| `objectFit`      | `object-fit`       |
| `objectPosition` | `object-position`  |
| `aspectRatio`    | `aspect-ratio`     |

### 📋 List

| Alias           | CSS Property          |
|-----------------|----------------------|
| `listStyle`     | `list-style`          |
| `listStyleType` | `list-style-type`     |
| `listStylePos`  | `list-style-position` |
| `listStyleImg`  | `list-style-image`    |

### 🗃️ Table

| Alias         | CSS Property      |
|---------------|------------------|
| `tblLayout`   | `table-layout`    |
| `tblCollapse` | `border-collapse` |
| `tblSpacing`  | `border-spacing`  |
| `captionSide` | `caption-side`    |
| `emptyCells`  | `empty-cells`     |

---

## 🔧 Extending with Custom Aliases

Adding your own shorthands is as simple as editing a JavaScript object. Open `customProperty.js` and add your alias:

```js
const properties = {
  // ... existing aliases ...

  // ✨ Add your own
  transition: "transition",
  cursor:     "cursor",
  opacity:    "opacity",
  overflow:   "overflow",
  vis:        "visibility",
  tr:         "transform",
  filter:     "filter",
  resize:     "resize",
};

export default properties;
```

Then use them like any other class:

```html
<button class="chai-cursor-pointer chai-opacity-0.8 chai-transition-all-0.3s-ease">
  Hover me
</button>
```

---

## ⚖️ Comparison

| Feature               | ChaiWaliCSS          | Tailwind CSS             | Inline Styles     |
|-----------------------|----------------------|--------------------------|-------------------|
| No build step         | ✅ Yes               | ❌ Requires CLI/PostCSS  | ✅ Yes            |
| Shorthand aliases     | ✅ 100+ shorthands   | ✅ Predefined classes    | ❌ Verbose        |
| Arbitrary values      | ✅ Any CSS value     | ⚠️ JIT mode only         | ✅ Yes            |
| Custom properties     | ✅ Plain JS object   | ⚠️ Config file required  | ❌ N/A            |
| Bundle size           | ~2 KB                | ~30 KB (purged)          | 0 KB              |
| Multi-word values     | ✅ Dash-separated    | ⚠️ Bracket syntax        | ✅ Yes            |
| Zero dependencies     | ✅ Yes               | ❌ Node ecosystem         | ✅ Yes            |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Clone** your fork

   ```bash
   git clone https://github.com/devDivyansh28/ChaiWaliCSS.git
   cd ChaiWaliCSS
   ```

3. **Create** a feature branch

   ```bash
   git checkout -b feat/my-new-alias
   ```

4. **Make your changes** (add aliases, fix bugs, improve docs)
5. **Commit** and **push**

   ```bash
   git commit -m "feat: add opacity and transition aliases"
   git push origin feat/my-new-alias
   ```

6. **Open a Pull Request** on GitHub

> Found a bug? [Open an issue →](https://github.com/devDivyansh28/ChaiWaliCSS/issues)

---

## 📄 License

[MIT](./LICENSE) © [Divyansh Sharma](https://github.com/devDivyansh28)

---

<div align="center">

Made with ☕ by **Divyansh Sharma**

[![npm](https://img.shields.io/badge/npm-chaiwalicss-c96f2c?logo=npm)](https://www.npmjs.com/package/chaiwalicss)
&nbsp;
[![GitHub](https://img.shields.io/badge/GitHub-ChaiWaliCSS-181717?logo=github)](https://github.com/devDivyansh28/ChaiWaliCSS)

</div>
