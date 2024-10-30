# Summary

...

# Installation

- NPM
  `npm install tw-table`

- YARN
  `yarn add tw-table`

# Usage

To use the library, start by importing `tw-table`:

```js
import { TwTable } from 'tw-table';
```

If you need type definitions from `react-table`, you can import them as follows:

```js
import { RowSelectionState } from '@tanstack/react-table';
```

You'll also need to configure Tailwind CSS to generate the necessary styles for this library. To do this, include `'node_modules/tw-table/**/*.{js,ts,jsx,tsx}'` in the `content` array of your `tailwind.config.js` file.

Your final configuration should look like this:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-table/**/*.{js,ts,jsx,tsx}',
  ],
  ...
};
```

# Contribution

...
